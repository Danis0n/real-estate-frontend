import {User} from "../user";

export interface UpdatePasswordResponse {
    status: number;
    error: string;
}

export interface RestorePasswordResponse {
    status: number;
    error: string;
}

export interface RedirectResponse {
    status: number;
    error: string;
    message: string;
}

export interface ConfirmResponse {
    status: number;
    error: string;
    message: string;
}

export interface RefreshResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
    error: string;
}

export interface LogoutResponse {
    status: number;
}

export interface RegisterResponse {
    status: number;
    error: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User | null;
    error: string;
    status: number;
}

export interface ValidateResponse {
    status: number;
    error: string;
    roles: string[];
}