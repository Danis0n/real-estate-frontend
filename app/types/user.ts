export interface User {
    id: string;
    email: string;
    siteLink: string;
    phone: string;
    userInfo: UserInfo;
    userLogin: UserLogin;
    userUr: UserUrInfo;
    imageUrl: string;
    date: string;
    roles: Role[];
}

export interface UserInfo {
    firstName: string;
    lastName: string;
    birthDate: string;
    description: string;
    locked: boolean;
    enabled: boolean;
}

export interface UserUrInfo {
    inn: string;
    description: string;
    link: string;
    address: string;
}

export interface UserLogin {
    login: string;
}

export interface Role {
    name: string;
}