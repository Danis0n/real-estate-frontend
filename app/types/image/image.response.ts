export interface ImagesDeleteResponse {
    status: number;
    error: string;
}

export interface ImageDeleteResponse {
    status: number;
    error: string;
}

export interface ImageUserResponse {
    status: number;
    error: string;
    UUID: string;
}

export interface ImageCreate {
    fieldName: string;
    originalName: string;
    mimetype: string;
    buffer: Uint8Array;
    size: number;
}

export interface ImagePostResponse {
    status: number;
    error: string;
    UUID: string;
    imagesUuids: string[];
}

export interface ImagesViewRowResponse {
    images: string[];
}

export interface ImageViewResponse {
    buffer: string;
}