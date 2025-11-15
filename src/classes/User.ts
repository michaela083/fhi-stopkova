import { Person } from './Person';
import { Product } from './Product';
import { Order } from './Order';
import {OrderItem} from "./OrderItem";

export class User extends Person {

    constructor(id: number, name: string, surname: string) {
        super(id, name, surname);
    }

    getId(): number {
        return this.id;
    }

    setName(name: string): void {
        this.name = name;
    }

}