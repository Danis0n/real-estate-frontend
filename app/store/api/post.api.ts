import {api} from "./api";
import {CreatePostResponse, FindAllPostResponse, FindOnePostResponse} from "../../types/post/post.response";
import {POST} from "../../services/post.service";
import { CreatePostRequest } from "../../types/post/post.request";

export const postApi = api.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query<FindAllPostResponse, any>({
            query: () => ({
                url: `${POST}/get-all`
            }),
            providesTags: () => [{type: 'Post'}]
        }),
        getPostById: builder.query<FindOnePostResponse, string>({
            query: (postUUID) => ({
                url: `${POST}/get/${postUUID}`
            }),
            providesTags: () => [{type: 'Post'}]
        }),
        getPostByUserId: builder.query<FindAllPostResponse, string>({
            query: (userUUID) => ({
                url: `${POST}/get-all/user/${userUUID}`
            }),
            providesTags: () => [{type: 'Post'}]
        }),
        createPost: builder.mutation<CreatePostResponse,CreatePostRequest>({
            query: data => ({
                url: `${POST}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{type: 'Post'}]
        })
    }),
})