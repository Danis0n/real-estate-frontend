export interface ConfirmRequest {
    token: string;
}

export interface RedirectRequest {
    token: string;
}

export interface RestorePasswordRequest {
    username: string;
    email: string;
}

export interface UpdatePasswordRequest {
    password: string;
    token: string;
}

export interface LogoutRequest {
    accessToken: string;
}

export interface RefreshRequest {
    refreshToken: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    login: string;
    phone: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    inn: string;
    link: string;
    role: string;
}

export interface LoginRequest {
    login: string;
    password: string;
}

export interface ValidateRequest {
    token: string;
}
