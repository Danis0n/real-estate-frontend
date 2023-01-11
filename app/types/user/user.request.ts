import {IUser} from "./user.interface";

export interface CreateUserRequest {
    email: string;
    password: string;
    login: string;
    phone: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    link: string;
    inn: string;
    role: string;
}