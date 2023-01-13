import React, {FC, useState, useEffect} from 'react';
import DimensionInput from "../dimension-input/DimensionInput";
import Select from "../select/Select";
import {IFilter, IQuery} from "./filter.interface";
import ButtonGreen from "../button/ButtonGreen";

interface FilterProps {
    props: IFilter;
    search: (value: string) => void;
}

interface IBuildQueryProps {
    params: IQuery;
}

const buildQuery = (props: IBuildQueryProps): string => {
    let params: string = '?'

    if (props.params.rooms !== '') {
        params += `rooms=${props.params.rooms}&`;
    }
    if (props.params.height !== '') {
        params += `height=${props.params.height}&`;
    }
    if (props.params.minPrice !== '' || props.params.maxPrice !== '') {
        params += `price=${props.params.minPrice}_${props.params.maxPrice}&`;
    }
    if (props.params.minCommon !== '' || props.params.maxCommon !== '') {
        params += `dimensions=${props.params.minCommon}_${props.params.maxCommon}&`;
    }
    if (props.params.minLiving !== '' || props.params.maxLiving !== '') {
        params += `livingDimensions=${props.params.minLiving}_${props.params.maxLiving}&`;
    }
    if (props.params.minKitchen !== '' || props.params.maxKitchen !== '') {
        params += `kitchenDimensions=${props.params.minKitchen}_${props.params.maxKitchen}&`;
    }
    if (props.params.parking) {
        params += `parking=true&`;
    }
    if (props.params.balcony) {
        params += `balcony=true&`;
    }
    if (props.params.renovation) {
        params += `renovation=true&`;
    }
    if (props.params.lift) {
        params += `lift=true&`;
    }

    return params.substring(0,params.length - 1);
}

const Filter: FC<FilterProps> = (props: FilterProps) => {

    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');

    const [minCommon, setMinCommon] = useState<string>('');
    const [maxCommon, setMaxCommon] = useState<string>('');

    const [minLiving, setMinLiving] = useState<string>('');
    const [maxLiving, setMaxLiving] = useState<string>('');

    const [minKitchen, setMinKitchen] = useState<string>('');
    const [maxKitchen, setMaxKitchen] = useState<string>('');

    const [rooms, setRooms] = useState<string>('');
    const [height, setHeight] = useState<string>('');

    const [renovation, setRenovation] = useState<boolean>(false);
    const [balcony, setBalcony] = useState<boolean>(false);
    const [parking, setParking] = useState<boolean>(false);
    const [lift, setLift] = useState<boolean>(false);

    return (
        <div className={'shadow-lg p-10 w-[1100px] bg-white rounded-lg ring-1 ring-black'}>
            <div className={'flex gap-5 mb-5'}>
                <div>Площадь</div>
                <div>Общая</div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'от'}
                        isRequired={false}
                        value={minCommon}
                        setValue={setMinCommon}
                    />
                </div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'до'}
                        isRequired={false}
                        value={maxCommon}
                        setValue={setMaxCommon}
                    />
                </div>
                <div>Жилая</div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'от'}
                        isRequired={false}
                        value={minLiving}
                        setValue={setMinLiving}
                    />
                </div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'до'}
                        isRequired={false}
                        value={maxLiving}
                        setValue={setMaxLiving}
                    />
                </div>
                <div>Кухня</div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'от'}
                        isRequired={false}
                        value={minKitchen}
                        setValue={setMinKitchen}
                    />
                </div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'до'}
                        isRequired={false}
                        value={maxKitchen}
                        setValue={setMaxKitchen}
                    />
                </div>
            </div>
            <div className={'flex gap-3 mb-5'}>
                <div>Количество комнат</div>
                <div><Select setValue={setRooms} elements={props.props.roomQuantity} title={'Не выбрано'}/></div>
                <div>Высота потолков</div>
                <div><Select setValue={setHeight} elements={props.props.floorHeights} title={'Не выбрано'}/></div>
            </div>
            <div className={'flex gap-5'}>
                <div>Цена</div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'от'}
                        isRequired={false}
                        value={minPrice}
                        setValue={setMinPrice}
                    />
                </div>
                <div>
                    <DimensionInput
                        type={'number'}
                        placeholder={'от'}
                        isRequired={false}
                        value={maxPrice}
                        setValue={setMaxPrice}
                    />
                </div>
                <div>Лифт</div>
                <div><input type={'checkbox'} onChange={() => setLift(!lift)}/></div>
                <div>Парковка</div>
                <div><input type={'checkbox'} onChange={() => setParking(!parking)}/></div>
                <div>Балкон</div>
                <div><input type={'checkbox'} onChange={() => setBalcony(!balcony)}/></div>
                <div>Отделка</div>
                <div><input type={'checkbox'} onChange={() => setRenovation(!renovation)}/></div>
            </div>
            <div className={'mt-10'}>
                <ButtonGreen onClick={() => props.search(buildQuery({params: {
                        renovation, lift, balcony,
                        parking, maxKitchen, minKitchen,
                        maxLiving, minCommon, minLiving,
                        maxCommon, minPrice, maxPrice,
                        height, rooms}}
                ))}>
                    Найти
                </ButtonGreen>
            </div>
        </div>
    );
};

export default Filter;