import React, {FC, useCallback, useEffect, useState} from 'react';
import Layout from "../../../layout/Layout";
import {IPostPage} from "../post.interface";
import UploadFile from "../../../../types/image/upload-file";
import {useDropzone} from "react-dropzone";
import DimensionInput from "../../../ui/dimension-input/DimensionInput";
import ButtonGreen from "../../../ui/button/ButtonGreen";
import {useAuth} from "../../../../hooks/useAuth";
import {postApi} from "../../../../store/api/post.api";

// TODO : redirect if post doesn't belong to user (redirect?)

const UpdatePost: FC<IPostPage> = ({post}) => {

    const { user } = useAuth();

    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [updateImages, {}] = postApi.useUpdatePostImagesMutation();

    const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

    useEffect(() => {
        post.images.map((image) => {
            setSelectedFiles((prevImage) => prevImage.concat(
                new UploadFile(`data:image/jpeg;base64,${image.buffer}`)
            ));
        })
    },[]);

    const [price, setPrice] = useState<string>(post.info.price.toString());
    const [name, setName] = useState<string>(post.name);
    const [description, setDescription] = useState<string>(post.info.description);
    const [floor, setFloor] = useState<string>(post.info.currentFloor.toString());
    const [dimensions, setDimensions] = useState<string>(post.info.dimensions.toString());
    const [livingDimensions, setLivingDimensions] = useState<string>(post.info.livingDimensions.toString());
    const [kitchenDimensions, setKitchenDimensions] = useState<string>(post.info.kitchenDimensions.toString());
    const [height, setHeight] = useState<string>(post.info.floorHeight.toString());
    const [balcony, setBalcony] = useState<string>(post.info.isBalcony.valueOf().toString());
    const [parking, setParking] = useState<string>(post.info.isParking.valueOf().toString());
    const [lift, setLift] = useState<string>(post.info.isLift.valueOf().toString());
    const [renovation, setRenovation] = useState<string>(post.info.isRenovation.valueOf().toString());

    const handleHeight = (event: any) => setHeight(event.target.value);
    const handleBalcony = (event: any) => setBalcony(event.target.value);
    const handleLift = (event: any) => setLift(event.target.value);
    const handleParking = (event: any) => setParking(event.target.value);
    const handleRenovation = (event: any) => setRenovation(event.target.value);

    const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.map((file: any) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFiles(
                    (prevImg) => prevImg.concat(new UploadFile(reader.result as string, file))
                );
            }
            reader.readAsDataURL(file);
        })
    }, [])

    const deleteFileHandler = (file: UploadFile, index: number) => {

        post.images.map((image) => {
           if (`data:image/jpeg;base64,${image.buffer}` === file.buffer)
               setImagesToDelete(
                   (prevImage) => prevImage.concat(image.imageUuid)
               );
        });

        setSelectedFiles(selectedFiles.filter((e) => e !== file));
        URL.revokeObjectURL(file.buffer);
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const handleCheck = (): boolean => {
        return true;
    }
    console.log(post);
    const handleSubmit = () => {
        if (!handleCheck()) return;
        const simpleData = new FormData();
        simpleData.append('name', name);
        simpleData.append('price', price);
        simpleData.append('currentFloor', floor);
        simpleData.append('description', description);
        simpleData.append('dimensions', dimensions);
        simpleData.append('floorHeight', height);
        simpleData.append('isBalcony', balcony);
        simpleData.append('isParking', parking);
        simpleData.append('isLift', lift);
        simpleData.append('isRenovation', renovation);
        simpleData.append('kitchenDimensions', kitchenDimensions);
        simpleData.append('livingDimensions', livingDimensions);
        simpleData.append('UUID', post.postUUID);
        simpleData.append('userUUID', user!.id);

        const imageData = new FormData();
        imageData.append('UUID', post.postUUID);
        imageData.append('userUUID', user!.id);

        selectedFiles.map((file) => {
            if (file.file) imageData.append('files', file.file);
        });

        imagesToDelete.map((file) => {
            imageData.append('deleteImages', file);
        });

        updatePost({
            name: name,
            price: Number(price),
            floorHeight: Number(height),
            isParking: Boolean(parking),
            isBalcony: Boolean(balcony),
            isRenovation: Boolean(renovation),
            dimensions: Number(dimensions),
            kitchenDimensions: Number(kitchenDimensions),
            livingDimensions: Number(livingDimensions),
            description: description,
            UUID: post.postUUID,
            userUUID: user!.id,
        }).unwrap();

        updateImages(imageData).unwrap();
    }

    console.log(imagesToDelete);

    return <Layout title={'Обновить объявление'}>
        <div className={'w-[850px] mr-auto ml-auto'}>
            <form action={`/p/${post.postUUID}`}>
                <div className={'shadow-xl p-10 mb-2 mt-[100px] bg-white'}>
                    <div className={'text-2xl mb-5'}>Фотографии *</div>
                    { selectedFiles.length < 10 && (
                        <div className={'opacity-50 hover:opacity-100 ring-1 ring-black p-5 hover:cursor-pointer rounded-md'}
                             {...getRootProps()}>
                            <input {...getInputProps()}/>
                            {isDragActive ?
                                <p>Перетащите файлы сюда для загрузки ...</p> :
                                <p className={'text-gray-500'}>
                                    Нажмите или перетащите для загрузки изображений ( не более 10 изображений )
                                </p>
                            }
                        </div>
                    )}
                    <div>
                        {selectedFiles && selectedFiles.map((file, index) => {
                            return (
                                <div className={'inline-block align-middle m-3 p-2'} key={index}>
                                    <button
                                        className={'hover:underline'}
                                        onClick={() => deleteFileHandler(file,index)}
                                    >Удалить</button>
                                    <img
                                        key={file.buffer}
                                        src={file.buffer}
                                        alt={'loaded file'}
                                        width={'200'}
                                        height={'200'}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={'shadow-xl mb-2 p-10 bg-white text-gray-500'}>
                    <div className={'text-2xl mb-5  text-black'}>Параметры *</div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'flex gap-1'}>
                            <div className={'mt-1.5 mr-1'}>
                                Общая площадь:
                            </div>
                            <DimensionInput
                                type={'number'}
                                placeholder={'м²'}
                                isRequired={true}
                                value={dimensions}
                                setValue={setDimensions}
                            />
                        </div>
                        <div className={'flex gap-1'}>
                            <div className={'mt-1.5 mr-1'}>
                                Площадь кухни:
                            </div>
                            <DimensionInput
                                type={'number'}
                                placeholder={'м²'}
                                isRequired={true}
                                value={kitchenDimensions}
                                setValue={setKitchenDimensions}
                            />
                        </div>
                        <div className={'flex gap-1'}>
                            <div className={'mt-1.5 mr-1'}>
                                Жилая площадь:
                            </div>
                            <DimensionInput
                                type={'number'}
                                placeholder={'м²'}
                                isRequired={true}
                                value={livingDimensions}
                                setValue={setLivingDimensions}
                            />
                        </div>
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'flex gap-1'}>
                            <div className={'mt-1.5 mr-1'}>
                                Этаж:
                            </div>
                            <DimensionInput
                                type={'number'}
                                placeholder={'до 99'}
                                isRequired={true}
                                value={floor}
                                setValue={setFloor}
                            />
                        </div>
                    </div>
                    <div onChange={handleHeight} className={'flex gap-5 mb-5'}>
                        <div>Высота потолков:</div>
                        <div><input required={true} type="radio" value="2.5" name="height"/> 2.5 м</div>
                        <div><input required={true} type="radio" value="2.6" name="height"/> 2.6 м</div>
                        <div><input required={true} type="radio" value="2.7" name="height"/> 2.7 м</div>
                        <div><input required={true} type="radio" value="3" name="height"/> 3 м</div>
                    </div>
                    <div className={'flex'}>
                        <div onChange={handleRenovation} className={'flex gap-5 mb-5'}>
                            <div className={'mt-1.5'}>Ремонт:</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="true" name="renovation"/> Да</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="false" name="renovation"/> Нет</div>
                        </div>
                    </div>
                    <div>
                        <div onChange={handleBalcony} className={'flex gap-5 mb-5'}>
                            <div className={'mt-1.5'}>Балкон:</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="true" name="balcony"/> Да</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="false" name="balcony"/> Нет</div>
                        </div>
                        <div onChange={handleParking} className={'flex gap-5 mb-5'}>
                            <div className={'mt-1.5'}>Парковка:</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="true" name="parking"/> Да</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="false" name="parking"/> Нет</div>
                        </div>
                        <div onChange={handleLift} className={'flex gap-5 mb-5'}>
                            <div className={'mt-1.5'}>Лифт:</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="true" name="lift"/> Да</div>
                            <div className={'mt-1.5'}><input required={true} type="radio" value="false" name="lift"/> Нет</div>
                        </div>
                    </div>
                </div>
                <div className={'shadow-xl mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Цена *</div>
                    <div>
                        <input
                            type={'number'}
                            className={'p-3 ring-black ring-1 rounded-sm'}
                            placeholder={'₽'}
                            required={true}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className={'shadow-xl mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Название *</div>
                    <div>
                        <input
                            type={'text'}
                            className={'p-3 ring-black ring-1 rounded-sm w-[400px]'}
                            placeholder={'Укажите наиболее характерные черты'}
                            required={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={'shadow-xl mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Описание *</div>
                    <textarea
                        required={true}
                        placeholder={'Расскажите о недвижимости, собственниках, соседях, транспортной доступности и т.д.'}
                        className={'w-[750px] h-[200px] p-2 ring-1 ring-black rounded-sm'}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={'p-2'}>
                    <ButtonGreen onClick={handleSubmit}>
                        <p className={'text-xl'}>Создать</p>
                    </ButtonGreen>
                </div>
            </form>
        </div>
    </Layout>
};

export default UpdatePost;