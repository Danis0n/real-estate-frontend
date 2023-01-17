import { IImage } from "../image/image.interface";

export interface IPost {
    postUUID: string;
    userUUID: string;
    name: string;
    dateOfCreation: string;
    location: string;
    city: string;
    deal: string;
    type: string;
    info: IPostInfo;
    images: IImage[];
    locked: boolean;
    lockedByAdmin: boolean;
}

export interface IPostInfo {
    infoId: string;
    price: number;
    floorHeight: number;
    maxFloor: number;
    currentFloor: number;
    houseType: string;
    isParking: boolean;
    isBalcony: boolean;
    isRenovation: boolean;
    roomQuantity: number;
    dimensions: number;
    kitchenDimensions: number;
    livingDimensions: number;
    buildAt: string;
    description: string;
}