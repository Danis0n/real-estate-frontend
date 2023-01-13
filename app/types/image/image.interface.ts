export interface IImage {
    imageUuid: string;
    buffer: string;
    date: string;
}

export interface IImageCreate {
    fieldName: string;
    originalName: string;
    mimetype: string;
    buffer: Uint8Array;
    size: number;
}