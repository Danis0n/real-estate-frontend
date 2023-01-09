import {IImageCreate} from "../image/image.interface";

export interface FindAllPostByUserRequest {
    userUUID: string;
}

export interface LockPostAdminStateRequest {
    postUUID: string;
    state: boolean;
}

export interface LockPostStateRequest {
    postUUID: string;
    userUUID: string;
    state: boolean;
}

export interface UpdatePostRequest {
    name: string;
    price: string;
    floorHeight: string;
    isParking: boolean;
    isBalcony: boolean;
    isRenovation: boolean;
    dimensions: string;
    kitchenDimensions: string;
    livingDimensions: string;
    description: string;
    UUID: string;
    userUUID: string;
}

export interface UpdateImagesRequest {
    UUID: string;
    userUUID: string;
    createImages: IImageCreate[];
    deleteImages: string[];
}

export interface CreatePostRequest {
    name: string;
    price: string;
    floorHeight: string;
    maxFloor: number;
    currentFloor: number;
    houseType: string;
    isParking: boolean;
    isBalcony: boolean;
    isRenovation: boolean;
    roomQuantity: string;
    dimensions: string;
    kitchenDimensions: string;
    livingDimensions: string;
    buildAt: string;
    description: string;
    city: string;
    location: string;
    deal: string;
    type: string;
    userUUID: string;
    images: IImageCreate[];
}

export interface FindAllPostRequest {}

export interface FindOnePostRequest {
    UUID: string;
}
