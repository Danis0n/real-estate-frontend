import {IUser} from "./user.interface";

export interface FindOneUserResponse {
    user: IUser;
}

export interface FindAllUsersResponse {
    users: IUser[];
}

export interface CreateUserResponse {
    status: number;
    user: IUser;
}