export interface ProductosInterface {
    id: Number;
    title: String;
    price: Number;
    description: String;
    category: String;
    image: String;
}

export class Productos implements ProductosInterface {
    constructor(
        public id: Number,
        public title: String,
        public price: Number,
        public description: String,
        public category: String,
        public image: String) { }
}