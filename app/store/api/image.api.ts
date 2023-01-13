import {api} from "./api";
import {IMAGE} from "../../services/image.service";
import {ImagesViewRowResponse, ImageViewResponse} from "../../types/image/image.response";

export const imageApi = api.injectEndpoints({
    endpoints: builder => ({
        getImage: builder.query<ImageViewResponse, string>({
            query: (imageUUID) => ({
                url: `/${IMAGE}/display/${imageUUID}`
            }),
            providesTags: () => [{type: 'Image'}]
        }),
        getImagesByPost: builder.mutation<ImagesViewRowResponse, string[]>({
            query: (UUIDs) => ({
                url: `${IMAGE}/display/row`,
                body: UUIDs
            }),
            invalidatesTags: () => [{type: 'Image'}]
        })
    }),
})
