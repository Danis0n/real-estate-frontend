interface IType {
    title: string;
    value: string;
}

export interface IFilter {
    floorHeights: IType[];
    roomQuantity: IType[];
    dealType: IType[];
    cities: IType[];
}

export interface IQuery {
    minPrice: string;
    maxPrice: string;
    minCommon: string;
    maxCommon: string;
    minLiving: string;
    maxLiving: string;
    minKitchen: string
    maxKitchen: string;
    rooms: string;
    height: string;
    renovation: boolean;
    balcony: boolean;
    parking: boolean;
    lift: boolean;
}