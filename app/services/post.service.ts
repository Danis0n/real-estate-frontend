import {axiosClassic} from "../api/axios";
import {FindAllPostResponse, FindOnePostResponse} from "../types/post/post.response";

export const POST = 'post';

export const PostService = {
    async getAll () {
        return axiosClassic.get<FindAllPostResponse>(`/${POST}/get-all`);
    },

    async getPostById (uuid: string) {
        return axiosClassic.get<FindOnePostResponse>(`/${POST}/get/${uuid}`);
    },

    async getPostsByUserId (uuid: string) {
        return axiosClassic.get<FindAllPostResponse>(`/${POST}/get-all/user/${uuid}`);
    },
};