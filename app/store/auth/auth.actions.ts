import { createAsyncThunk } from "@reduxjs/toolkit";
import { RefreshResponse, LoginResponse, RegisterResponse } from "../../types/auth/auth.response";
import { LoginRequest, RegisterRequest } from "../../types/auth/auth.request";
import { AUTH, AuthService } from "../../services/auth.service";
import {toastr} from "react-redux-toastr";

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
    `${AUTH}/login`,
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.login(data);
            toastr.success('Вход', 'Успешно');
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при входе');
        }
    }
)

export const register = createAsyncThunk<RegisterResponse, RegisterRequest>(
    `${AUTH}/register`,
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.register(data);
            toastr.success('Регистрация', 'Успешно');
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при входе');
        }
    }
);

export const refresh = createAsyncThunk<RefreshResponse, void>(
    `${AUTH}/refresh`,
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.refresh();
            toastr.success('Обновление', 'Успешно');
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при обновлении состояния');
        }
    }
);

export const logout = createAsyncThunk(`${AUTH}/logout`, async () => {
    return {};
});

