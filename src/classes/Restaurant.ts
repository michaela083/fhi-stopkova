import { Product } from './Product';

export class Restaurant {
    private name: string;
    private address: string;
    private phone: string;
    private menu: Product[];

    constructor(name: string, address: string, phone: string) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.menu = [];
    }

    addProduct(name: string, price: number): Product {
        const product = new Product(name, price, this);
        this.menu.push(product);
        return product;
    }

    getMenu(): string {
        const productList = this.menu
            .map(product => `${product.getName()} - ${product.getPrice()}€`)
            .join('\n');

        return `${this.name}\n${productList}`;
    }

    getName(): string {
        return this.name;
    }
}