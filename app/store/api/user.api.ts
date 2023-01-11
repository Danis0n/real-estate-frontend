import {api} from "./api";
import {USER} from "../../services/user.service";
import {FindOneUserResponse} from "../../types/user/user.response";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query<FindOneUserResponse, string>({
            query: (uuid) => ({
                url: `${USER}/get/${uuid}`
            }),
            providesTags: () => [{type: 'User'}]
        }),
    })
})