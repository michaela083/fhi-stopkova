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
    /*
    addProduct(name: string, price: number, category: string, description?: string): Product {
        const productId = `p${this.menu.length + 1}`;
        const priceInCents = Math.round(price * 100);
        const product = new Product(productId, category, name, priceInCents, description);
        this.menu.push(product);
        return product;
    }

    getMenu(): string {
        const productList = this.menu
            .map(product => `${product.getName()} - ${product.getFormattedPrice()}€`)
            .join('\n');

        return `${this.name}\n${productList}`;
    }

    getName(): string {
        return this.name;
    }
     */
}