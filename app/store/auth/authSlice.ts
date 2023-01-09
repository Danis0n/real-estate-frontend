import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../types/user.interface";
import {login, logout, refresh, register} from "./auth.actions";
import {RefreshResponse} from "../../types/auth/auth.response";

interface AuthState {
    user: IUser | null;
    isLoading: boolean;
    isAuth: boolean;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    accessToken: '',
    refreshToken: '',
    isAuth: false,
    isLoading: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.isAuth = true;
            state.isLoading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
        }
    },
    extraReducers: builder => {
        builder.
            addCase(login.pending, state => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isAuth = true;
                state.isLoading = false;
                state.user = payload.user;
                state.accessToken = payload.accessToken;
                state.refreshToken = payload.refreshToken;
                localStorage.setItem('token', payload.accessToken);
            })
            .addCase(login.rejected, state => {
                state.isLoading = false;
                state.user = null;
                state.refreshToken = '';
                state.accessToken = '';
                localStorage.removeItem('token');
            })
            .addCase(logout.fulfilled, state => {
                state.isLoading = false;
                state.user = null;
                state.refreshToken = '';
                state.accessToken = '';
                localStorage.removeItem('token');
            })
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, state => {

            })
            .addCase(refresh.pending, state => {
                state.isLoading = true;
            })
            .addCase(refresh.fulfilled, (state, { payload }) => {
                state.isAuth = true;
                state.isLoading = false;
                state.user = payload.user;
                state.accessToken = payload.accessToken;
                state.refreshToken = payload.refreshToken;
                localStorage.setItem('token', payload.accessToken);
            })
            .addCase(refresh.rejected, state => {
                state.isLoading = false;
                state.user = null;
                state.refreshToken = '';
                state.accessToken = '';
                localStorage.removeItem('token');
            })
    }
});

export const { setData } = authSlice.actions;

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;