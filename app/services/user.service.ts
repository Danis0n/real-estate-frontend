import {axiosClassic} from "../api/axios";
import {FindAllPostResponse, FindOnePostResponse} from "../types/post/post.response";
import {FindAllUsersResponse, FindOneUserResponse} from "../types/user/user.response";

export const USER = 'user';

export const UserService = {
    async getAll () {
        return axiosClassic.get<FindAllUsersResponse>(`/${USER}/get-all`);
    },

    async getUserById (uuid: string) {
        return axiosClassic.get<FindOneUserResponse>(`/${USER}/get/${uuid}`);
    },
};