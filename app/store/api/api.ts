import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "../../api/axios";
import {TypeRootState} from "../store";
import {LogoutResponse} from "../../types/auth/auth.response";
import {AUTH} from "../../services/auth.service";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as TypeRootState).auth.accessToken;
            if (token)
                headers.set('Authorization', `Bearer ${token}`);
            return headers;
        }
    }),
    endpoints: builder => ({
        logout: builder.query<LogoutResponse, any>({
            query: () => `${AUTH}/logout`,
            providesTags: () => [{type: 'Auth'}],
        })
    }),
})
