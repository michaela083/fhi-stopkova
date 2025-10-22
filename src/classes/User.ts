import { Person } from './Person';
import { Restaurant } from './Restaurant';
import { Product } from './Product';
import { Order } from './Order';

export class User extends Person {
    private address: string;
    private orders: Order[];

    constructor(id: string, name: string, phone: string, address: string) {
        super(id, name, phone);
        this.address = address;
        this.orders = [];
    }

    createOrder(orderId: string, restaurant: Restaurant, products: Product[]): Order {
        const order = new Order(orderId, this, restaurant, products);
        this.orders.push(order);
        console.log(`Používateľ ${this.getName()} vytvoril objednávku ${orderId}`);
        return order;
    }

    getOrders(): Order[] {
        return [...this.orders];
    }

    getAddress(): string {
        return this.address;
    }
}