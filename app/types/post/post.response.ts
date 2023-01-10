import {IPost} from "./post.interface";

export interface FindOnePostResponse {
    status: number;
    error: string;
    post: IPost;
}

export interface FindAllPostResponse {
    posts: IPost[];
}

export interface CreatePostResponse {
    status: number;
    error: string;
    post: IPost | undefined;
}

export interface UpdateImagesResponse {
    status: number;
    error: string;
}

export interface UpdatePostResponse {
    status: number;
    error: string;
}

export interface LockPostStateResponse {
    status: number;
    error: string;
}

export interface LockPostAdminStateResponse {
    status: number;
    error: string;
}
