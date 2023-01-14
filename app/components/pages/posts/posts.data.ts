import {IPostsPage} from "./posts.interface";

export const postsData: IPostsPage = {
    sort: [
        {
            title: 'По убыванию цены',
            value: 'price',
        },
        {
            title: 'По общей площади',
            value: 'area',
        },
    ],
    deal: [
        {
            title: 'Купить',
            value: 'Купить'
        },
        {
            title: 'Аренда',
            value: 'Аренда'
        },
    ]
}