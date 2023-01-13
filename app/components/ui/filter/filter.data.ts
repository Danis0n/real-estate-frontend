import {IFilter} from "./filter.interface";

export const filterData: IFilter = {
    cities: [
        {value: 'Bryansk', title: 'Брянск'},
        {value: 'Orel', title: 'Орел'},
        {value: 'Moskva', title: 'Москва'},
    ],
    dealType: [
        {value: 'Kupit', title: 'Купить'},
        {value: 'Prodat', title: 'Продать'},
    ],
    floorHeights: [
        {value: '2.5', title: '2,5 м'},
        {value: '2.6', title: '2,6 м'},
        {value: '2.7', title: '2,7 м'},
        {value: '3',   title: '3 м'},
    ],
    roomQuantity: [
        {value: '1', title: '1'},
        {value: '2', title: '2'},
        {value: '3', title: '3'},
        {value: '4', title: '4'},
        {value: '5', title: '5'},
    ],
}