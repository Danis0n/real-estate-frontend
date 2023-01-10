import {ImageCreate} from "./image.response";

export interface ImageViewRequest {
    UUID: string;
}

export interface ImagePostRequest {
    images: ImageCreate[];
    UUID: string;
}

export interface ImageUserRequest {
    buffer: Uint8Array;
    fieldName: string;
    originalName: string;
    mimetype: string;
    size: number;
}

export interface ImageDeleteRequest {
    UUID: string;
}

export interface ImagesDeleteRequest {
    UUIDs: string[];
}

export interface ImagesViewRowRequest {
    UUIDs: string[];
}