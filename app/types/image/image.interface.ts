export interface IImage {
    imageUuid: string;
    date: string;
}

export interface IImageCreate {
    fieldName: string;
    originalName: string;
    mimetype: string;
    buffer: Uint8Array;
    size: number;
}