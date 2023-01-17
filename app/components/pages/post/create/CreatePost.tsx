import React, { useCallback, useState } from 'react';
import Layout from "../../../layout/Layout";
import { useDropzone } from 'react-dropzone'
import UploadFile from "../../../../types/image/upload-image";
import DimensionInput from "../../../ui/dimension-input/DimensionInput";
import ButtonGreen from "../../../ui/button/ButtonGreen";

const CreatePost = () => {

    const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.map((file: any) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFiles(
                    (prevImg) => prevImg.concat(new UploadFile(file, reader.result as string))
                );
            }
            reader.readAsDataURL(file);
        })
    }, [])

    const deleteFileHandler = (file: UploadFile, index: number) => {
        setSelectedFiles(selectedFiles.filter((e) => e !== file));
        URL.revokeObjectURL(file.url);
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const seeLog = (event: any) => {
        console.log(event.target.value)
    }

    return <Layout title={'Добавить объявление'}>
        <div className={'w-[850px] mr-auto ml-auto'}>
            <div className={'shadow-xl mt-[100px] mb-2 p-10 bg-white'}>
                <div className={'text-2xl mb-5'}>Тип объявления *</div>
                <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                    <div className={'text-gray-500'}>Тип сделки:</div>
                    <div><input type="radio" value="Купить" name="deal"/> Продажа</div>
                    <div><input type="radio" value="Аренда" name="deal"/> Аренда</div>
                </div>
                <div onChange={seeLog} className={'flex gap-5'}>
                    <div className={'text-gray-500'}>Вид недвижимости:</div>
                    <div><input type="radio" value="Квартира" name="houseType"/> Квартира</div>
                    <div><input type="radio" value="Дом" name="houseType"/> Дом</div>
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
                                    key={file.url}
                                    src={file.url}
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
                <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                    <div>Количество комнат:</div>
                    <div><input type="radio" value="1" name="room"/> 1</div>
                    <div><input type="radio" value="2" name="room"/> 2</div>
                    <div><input type="radio" value="3" name="room"/> 3</div>
                    <div><input type="radio" value="4" name="room"/> 4</div>
                    <div><input type="radio" value="5" name="room"/> 5+</div>
                </div>
                <div className={'flex gap-5 mb-5'}>
                    <div className={'flex gap-1'}>
                        <div className={'mt-1.5 mr-1'}>
                            Общая площадь:
                        </div>
                        <DimensionInput
                            type={'number'}
                            placeholder={'м²'}
                            isRequired={false}
                            value={''}
                            setValue={() => {}}
                        />
                    </div>
                    <div className={'flex gap-1'}>
                        <div className={'mt-1.5 mr-1'}>
                            Площадь кухни:
                        </div>
                        <DimensionInput
                            type={'number'}
                            placeholder={'м²'}
                            isRequired={false}
                            value={''}
                            setValue={() => {}}
                        />
                    </div>
                    <div className={'flex gap-1'}>
                        <div className={'mt-1.5 mr-1'}>
                            Жилая площадь:
                        </div>
                        <DimensionInput
                            type={'number'}
                            placeholder={'м²'}
                            isRequired={false}
                            value={''}
                            setValue={() => {}}
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
                            isRequired={false}
                            value={''}
                            setValue={() => {}}
                        />
                    </div>
                    <div className={'flex gap-1'}>
                        <div className={'mt-1.5 mr-1'}>
                            Этажей в доме:
                        </div>
                        <DimensionInput
                            type={'number'}
                            placeholder={'до 99'}
                            isRequired={false}
                            value={''}
                            setValue={() => {}}
                        />
                    </div>
                </div>
                <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                    <div>Высота потолков:</div>
                    <div><input type="radio" value="2.5" name="height"/> 2.5 м</div>
                    <div><input type="radio" value="2.6" name="height"/> 2.6 м</div>
                    <div><input type="radio" value="2.7" name="height"/> 2.7 м</div>
                    <div><input type="radio" value="3" name="height"/> 3 м</div>
                </div>
                <div className={'flex'}>
                    <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Ремонт:</div>
                        <div className={'mt-1.5'}><input type="radio" value="true" name="renovation"/> Да</div>
                        <div className={'mt-1.5'}><input type="radio" value="false" name="renovation"/> Нет</div>
                    </div>
                    <div className={'flex'}>
                        <div className={'ml-5 mr-5 mt-1.5'}>Год постройки:</div>
                        <div>
                            <DimensionInput
                                type={'number'}
                                placeholder={''}
                                isRequired={false}
                                value={''}
                                setValue={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Балкон:</div>
                        <div className={'mt-1.5'}><input type="radio" value="true" name="balcony"/> Да</div>
                        <div className={'mt-1.5'}><input type="radio" value="false" name="balcony"/> Нет</div>
                    </div>
                    <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Парковка:</div>
                        <div className={'mt-1.5'}><input type="radio" value="true" name="parking"/> Да</div>
                        <div className={'mt-1.5'}><input type="radio" value="false" name="parking"/> Нет</div>
                    </div>
                    <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Лифт:</div>
                        <div className={'mt-1.5'}><input type="radio" value="true" name="lift"/> Да</div>
                        <div className={'mt-1.5'}><input type="radio" value="false" name="lift"/> Нет</div>
                    </div>
                    <div onChange={seeLog} className={'flex gap-5 mb-5'}>
                        <div className={'mt-1.5'}>Тип дома:</div>
                        <div className={'mt-1.5'}><input type="radio" value="true" name="lift"/> Кирпичный</div>
                        <div className={'mt-1.5'}><input type="radio" value="false" name="lift"/> Панельный</div>
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
                    />
                </div>
            </div>
            <div className={'shadow-xl mb-2 p-10 bg-white'}>
                <div className={'text-2xl mb-5'}>Описание *</div>
                <textarea
                    placeholder={'Расскажите о недвижимости, собственниках, соседях, транспортной доступности и т.д.'}
                    className={'w-[750px] h-[200px] p-2 ring-1 ring-black rounded-sm'}
                />
            </div>
            <div className={'p-2'}>
                <ButtonGreen onClick={() => {}}>
                    <p className={'text-xl'}>Создать</p>
                </ButtonGreen>
            </div>
        </div>
    </Layout>
};

export default CreatePost;