export interface PostInterface {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

export class Post implements PostInterface {
    constructor(
        public userId: Number,
        public id: Number,
        public title: String,
        public body: String
    ) {}
};