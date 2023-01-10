import {axiosClassic} from "../api/axios";
import {FindOnePostResponse} from "../types/post/post.response";
import {ImagesViewRowResponse} from "../types/image/image.response";

export const IMAGE = 'image';

export const ImageService = {
    async getRow(images: string[]) {
        return axiosClassic.post<ImagesViewRowResponse>(
            `/${IMAGE}/display/post/row`,
            {UUIDs: images}
        )
    },

    async getImageViewById(uuid: string) {
        return axiosClassic.get<FindOnePostResponse>(`/${IMAGE}/display/${uuid}`);
    },
}
