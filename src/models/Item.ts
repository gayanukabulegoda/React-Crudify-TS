export class Item {
    id: string;
    name: string;
    description: string;
    price: number;

    constructor(id: string, name: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}