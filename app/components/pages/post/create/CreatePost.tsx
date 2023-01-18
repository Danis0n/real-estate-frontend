import React, {FC, useCallback, useState} from 'react';
import Layout from "../../../layout/Layout";
import { useDropzone } from 'react-dropzone'
import UploadFile from "../../../../types/image/upload-file";
import DimensionInput from "../../../ui/dimension-input/DimensionInput";
import ButtonGreen from "../../../ui/button/ButtonGreen";
import {IType} from "../../posts/posts.interface";
import Select from "../../../ui/select/Select";
import {postApi} from "../../../../store/api/post.api";
import {useAuth} from "../../../../hooks/useAuth";

export interface CreatePostProps {
    cities: IType[];
}
// TODO : fix it!
const CreatePost: FC<CreatePostProps> = ({cities}) => {

    const { user } = useAuth();

    const [createPost, { isLoading } ] = postApi.useCreatePostMutation();

    const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

    const [city, setCity] = useState<string>('');
    const [location, setLocation] = useState<string>('');

    const [price, setPrice] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const [deal, setDeal] = useState<string>('');
    const [houseType, setHouseType] = useState<string>('');

    const [room, setRoom] = useState<string>('');
    const [floor, setFloor] = useState<string>('');
    const [maxFloor, setMaxFloor] = useState<string>('');

    const [dimensions, setDimensions] = useState<string>('');
    const [livingDimensions, setLivingDimensions] = useState<string>('');
    const [kitchenDimensions, setKitchenDimensions] = useState<string>('');

    const [material, setMaterial] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [build, setBuild] = useState<string>('');

    const [balcony, setBalcony] = useState<string>('');
    const [parking, setParking] = useState<string>('');
    const [lift, setLift] = useState<string>('');
    const [renovation, setRenovation] = useState<string>('');

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
        setSelectedFiles(selectedFiles.filter((e) => e !== file));
        URL.revokeObjectURL(file.buffer);
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const handleDeal = (event: any) => setDeal(event.target.value);
    const handleHouseType = (event: any) => setHouseType(event.target.value);
    const handleRoom = (event: any) => setRoom(event.target.value);
    const handleMaterial = (event: any) => setMaterial(event.target.value);
    const handleHeight = (event: any) => setHeight(event.target.value);
    const handleBalcony = (event: any) => setBalcony(event.target.value);
    const handleLift = (event: any) => setLift(event.target.value);
    const handleParking = (event: any) => setParking(event.target.value);
    const handleRenovation = (event: any) => setRenovation(event.target.value);

    const handleCheck = (): boolean => {
        return true;
    }

    const handleSubmit = () => {
        if (!handleCheck()) return;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('buildAt', build);
        formData.append('city', city);
        formData.append('currentFloor', floor);
        formData.append('maxFloor', maxFloor);
        formData.append('deal', deal);
        formData.append('description', description);
        formData.append('dimensions', dimensions);
        formData.append('floorHeight', height);
        formData.append('houseType', material);
        formData.append('isBalcony', balcony);
        formData.append('isParking', parking);
        formData.append('isLift', lift);
        formData.append('isRenovation', renovation);
        formData.append('kitchenDimensions', kitchenDimensions);
        formData.append('livingDimensions', livingDimensions);
        formData.append('location', location);
        formData.append('roomQuantity', room);
        formData.append('type', houseType);
        formData.append('userUUID', user!.id);

        selectedFiles.map((file) => {
            formData.append('files', file.file);
        })

        createPost(formData).unwrap();
    }

    return <Layout title={'Добавить объявление'}>
        <div className={'w-[850px] mr-auto ml-auto'}>
            <form>
            <div className={'shadow-xl mt-[100px] mb-2 p-10 bg-white'}>
                <div className={'text-2xl mb-5'}>Тип объявления *</div>
                <div onChange={handleDeal} className={'flex gap-5 mb-5'}>
                    <div className={'text-gray-500'}>Тип сделки:</div>
                    <div><input required={true} type="radio" value="Купить" name="deal"/> Продажа</div>
                    <div><input required={true} type="radio" value="Аренда" name="deal"/> Аренда</div>
                </div>
                <div onChange={handleHouseType} className={'flex gap-5'}>
                    <div className={'text-gray-500'}>Вид недвижимости:</div>
                    <div><input required={true} type="radio" value="Квартира" name="houseType"/> Квартира</div>
                    <div><input required={true} type="radio" value="Дом" name="houseType"/> Дом</div>
                </div>
            </div>
            <div className={'shadow-xl mb-2 p-10 bg-white'}>
                <div className={'text-2xl mb-5'}>Адрес *</div>
                <div className={'flex gap-10'}>
                    <Select setValue={setCity} elements={cities} title={'Город'}/>
                    <input
                        type={'text'}
                        className={'p-3 ring-black ring-1 rounded-sm w-[400px]'}
                        placeholder={'Укажите точный адрес'}
                        required={true}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>
            <div className={'shadow-xl p-10 mb-2 bg-white'}>
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
                <div onChange={handleRoom} className={'flex gap-5 mb-5'}>
                    <div>Количество комнат:</div>
                    <div><input required={true} type="radio" value="1" name="room"/> 1</div>
                    <div><input required={true} type="radio" value="2" name="room"/> 2</div>
                    <div><input required={true} type="radio" value="3" name="room"/> 3</div>
                    <div><input required={true} type="radio" value="4" name="room"/> 4</div>
                    <div><input required={true} type="radio" value="5" name="room"/> 5+</div>
                </div>
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
                    <div className={'flex gap-1'}>
                        <div className={'mt-1.5 mr-1'}>
                            Этажей в доме:
                        </div>
                        <DimensionInput
                            type={'number'}
                            placeholder={'до 99'}
                            isRequired={true}
                            value={maxFloor}
                            setValue={setMaxFloor}
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
                    <div className={'flex'}>
                        <div className={'ml-5 mr-5 mt-1.5'}>Год постройки:</div>
                        <div>
                            <DimensionInput
                                type={'number'}
                                placeholder={''}
                                isRequired={true}
                                value={build}
                                setValue={setBuild}
                            />
                        </div>
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
                    <div onChange={handleMaterial} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Тип дома:</div>
                        <div className={'mt-1.5'}><input required={true} type="radio" value="true" name="material"/> Кирпичный</div>
                        <div className={'mt-1.5'}><input required={true} type="radio" value="false" name="material"/> Панельный</div>
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

export default CreatePost;