import { Person } from './Person';
import { Product } from './Product';
import { Order } from './Order';
import {OrderItem} from "./OrderItem";

export class User extends Person {
    private orders: Order[];

    constructor(id: number, name: string) {
        super(id, name);
        this.orders = [];
    }

    getId(): number {
        return this.id;
    }

    setName(name: string): void {
        this.name = name;
    }

    createOrder(tableNumber: number, notes?: string): Order {
        const order = new Order(this.id, tableNumber, notes);
        this.orders.push(order);
        return order;
    }

    getOrders(): Order[] {
        return [...this.orders];
    }

}