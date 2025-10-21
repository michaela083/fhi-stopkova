import { Restaurant } from './Restaurant';

export class Product {
    private name: string;
    private price: number;
    private restaurant: Restaurant;

    constructor(name: string, price: number, restaurant: Restaurant) {
        this.name = name;
        this.price = price;
        this.restaurant = restaurant;
    }

    getRestaurant(): Restaurant {
        return this.restaurant;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}