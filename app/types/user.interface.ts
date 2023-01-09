export interface IUser {
    id: string;
    email: string;
    siteLink: string;
    phone: string;
    userInfo: IUserInfo;
    userLogin: IUserLogin;
    userUr: IUserUrInfo;
    imageUrl: string;
    date: string;
    roles: IRole[];
}

export interface IUserInfo {
    firstName: string;
    lastName: string;
    birthDate: string;
    description: string;
    locked: boolean;
    enabled: boolean;
}

export interface IUserUrInfo {
    inn: string;
    description: string;
    link: string;
    address: string;
}

export interface IUserLogin {
    login: string;
}

export interface IRole {
    name: string;
}