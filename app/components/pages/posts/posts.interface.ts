import {IPost} from "../../../types/post/post.interface";

interface IType {
    title: string;
    value: string;
}

export interface IPostsPage {
    deal: IType[];
    sort: IType[];
}