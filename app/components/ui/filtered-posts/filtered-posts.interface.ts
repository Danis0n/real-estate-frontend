import {IPost} from "../../../types/post/post.interface";

export interface IFilteredPosts {
    posts: IPost[];
    deal: string;
    sort: string;
}