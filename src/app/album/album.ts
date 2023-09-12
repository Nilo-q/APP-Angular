export interface AlbumInterface {
    userId: Number;
    id: Number;
    title: String;
}

export class Album implements AlbumInterface {
    constructor(
        public userId: Number,
        public id: Number,
        public title: String){}
}