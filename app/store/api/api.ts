import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../../api/axios";
import {TypeRootState} from "../store";
import {LogoutResponse, RefreshResponse} from "../../types/auth/auth.response";
import {AUTH} from "../../services/auth.service";
import {logout} from "../auth/auth.actions";
import {setData} from "../auth/authSlice";
import {IPost} from "../../types/post/post.interface";


const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as TypeRootState).auth.accessToken;
        if (token)
            headers.set('Authorization', `Bearer ${token}`);
        return headers;
    }
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery(`${AUTH}/refresh`, api, extraOptions)
        if (refreshResult.data) {
            api.dispatch(setData({...refreshResult.data}));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
}

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Auth', 'User', 'Post'],
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        logout: builder.mutation<LogoutResponse, any>({
            query: () => ({
                url: `${AUTH}/logout`,
                method: 'POST',
            }),
            invalidatesTags: () => [{type: 'Auth'}]
        }),
        refresh: builder.query<RefreshResponse, any>({
            query: () => ({
                url: `${AUTH}/refresh`,
            }),
            providesTags: () => [{type: 'Auth'}]
        }),
        // getProfile: builder.query<IPost,any>({
        //     query: () => ({
        //         url: `${'user'}/profile`
        //     })
        // })
    }),
})

