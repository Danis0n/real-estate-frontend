import {IPost} from "../../../types/post/post.interface";

interface IType {
    title: string;
    value: string;
}

export interface IPostsProps {
    deal: IType[];
    sort: IType[];
    cities: IType[];
}