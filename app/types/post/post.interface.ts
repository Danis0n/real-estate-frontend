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
    info: IPostInfo | undefined;
    images: IImage[];
    locked: boolean;
    lockedByAdmin: boolean;
}

export interface IPostInfo {
    infoId: string;
    price: number;
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
}