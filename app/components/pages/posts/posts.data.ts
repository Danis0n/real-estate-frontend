import {IPostsPage} from "./posts.interface";

export const postsData: IPostsPage = {
    sort: [
        {
            title: 'По цене',
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
            value: 'buy'
        },
        {
            title: 'Аренда',
            value: 'rent'
        },
    ]
}