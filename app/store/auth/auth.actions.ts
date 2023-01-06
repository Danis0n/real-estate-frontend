import { createAsyncThunk } from "@reduxjs/toolkit";
import { RefreshResponse, LoginResponse, RegisterResponse } from "../../types/auth/auth.response";
import { LoginRequest, RegisterRequest } from "../../types/auth/auth.request";
import { AUTH, AuthService } from "../../services/auth.service";

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
    `${AUTH}/login`,
    async (data, thunkAPI) => {
        try {
            return await AuthService.login(data);
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при входе');
        }
    }
)

export const register = createAsyncThunk<RegisterResponse, RegisterRequest>(
    `${AUTH}/register`,
    async (data, thunkAPI) => {
        try {
            return await AuthService.register(data);
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при входе');
        }
    }
);

export const refresh = createAsyncThunk<RefreshResponse, void>(
    `${AUTH}/refresh`,
    async (_, thunkAPI) => {
        try {
            return await AuthService.refresh();
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при обновлении состояния');
        }
    }
);

export const logout = createAsyncThunk(`${AUTH}/logout`, async () => {
    return {};
});

