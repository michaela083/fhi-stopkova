import { Person } from "./Person";
import { Product } from "./Product";

export class Order {
    private id: string;
    private date: Date;
    private status: string;
    private person: Person;
    private products: Product[];

    constructor(id: string, date: Date, status: string, person: Person, products: Product[]) {
        this.id = id;
        this.date = date;
        this.status = status;
        this.person = person;
        this.products = products;
    }
}