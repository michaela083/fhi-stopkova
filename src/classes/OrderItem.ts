import {Product} from "./Product";

export class OrderItem {
    id: number;
    productId: number;
    productName: string;
    priceInCents: number;
    quantity: number;

    constructor(id: number, product: Product, quantity: number) {
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.priceInCents = product.priceInCents;
        this.quantity = quantity;
    }

    getSubtotal(): number {
        return this.priceInCents * this.quantity;
    }
}