import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/user";
import {LoginResponse} from "../../types/auth/auth.response";
import {login} from "./auth.actions";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuth: boolean;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    accessToken: "",
    refreshToken: "",
    isAuth: false,
    isLoading: false,
    user: null
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<LoginResponse>) => {
            state.isAuth = true;
            state.isLoading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        [login.pending.type]: (state) => {
            state.isLoading = true;
        },
        [login.rejected.type]: (state) => {
            state.isLoading = false;
            state.user = null;
        }
    },
});

export default AuthSlice;