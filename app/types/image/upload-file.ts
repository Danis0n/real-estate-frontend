export default class UploadFile {
    file = {} as File;
    buffer: string;

    // constructor(url: string);
    constructor(url: string, file?: File){
        this.buffer = url;
        if (file) {
            this.file = file;
        }
    }

}