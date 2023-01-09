import {LoginRequest, RegisterRequest} from "../types/auth/auth.request";
import {RefreshResponse, LoginResponse, RegisterResponse, LogoutResponse} from "../types/auth/auth.response";
import {axiosClassic} from "../api/axios";

export const AUTH = 'auth'

export const AuthService = {
    async login(data: LoginRequest): Promise<LoginResponse> {
        const response =
            await axiosClassic.post<LoginResponse>(
                `/${AUTH}/login`,
                data,
                { withCredentials: true },
            );
        return response.data;
    },

    async logout(): Promise<LogoutResponse> {
        const response =
            await axiosClassic.post<LogoutResponse>(
                `/${AUTH}/logout`
            );
        return response.data;
    },

    async register(data: RegisterRequest): Promise<RegisterResponse> {
        const response =
            await axiosClassic.post<RegisterResponse>(
                `/${AUTH}/register`,
                data,
            );
        return response.data;
    },

    async refresh(): Promise<RefreshResponse> {
        const response =
            await axiosClassic.get<RefreshResponse>(
                `/${AUTH}/refresh`,
                { withCredentials: true },
        )
        return response.data;
    }
}