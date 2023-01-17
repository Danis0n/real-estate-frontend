import {IPostsProps} from "./posts.interface";

export const postsData: IPostsProps = {
    sort: [
        { title: 'По убыванию цены', value: 'price', },
        { title: 'По общей площади', value: 'area', },
    ],
    deal: [
        { title: 'Купить', value: 'Купить' },
        { title: 'Аренда', value: 'Аренда' },
    ],
    cities: [
        { title: 'Брянск', value: 'Брянск' },
        { title: 'Орел', value: 'Орел' },
        { title: 'Москва', value: 'Москва' },
    ]
}