import {IHome} from "./home.interface";

export const homeData: IHome = {
    cities: [
        {
            title: 'Брянск',
            value: 'Bryansk',
        },
        {
            title: 'Москва',
            value: 'msk',
        },
        {
            title: 'Орёл',
            value: 'orel',
        },
    ],
    nav: [
        {
            title: 'Купить',
            link: '/posts?dealType=buy'
        },
        {
            title: 'Аренда',
            link: '/posts?dealType=rent'
        },
    ],
    types: [
        {
            title: 'Купить',
            value: 'buy'
        },
        {
            title: 'Аренда',
            value: 'rent'
        },
    ]
}