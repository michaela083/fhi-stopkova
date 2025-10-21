import { User } from './User';
import { Restaurant } from './Restaurant';
import { Product } from './Product';
import { DeliveryGuy } from './DeliveryGuy';

export enum OrderStatus {
    PENDING = 'PENDING',           // čaká na kuriéra
    ACCEPTED = 'ACCEPTED',         // kuriér prijal
    IN_DELIVERY = 'IN_DELIVERY',   // kuriér doručuje
    DELIVERED = 'DELIVERED',       // doručené
    CANCELLED = 'CANCELLED'        // zrušené
}

export class Order {
    private orderId: string;
    private user: User;
    private restaurant: Restaurant;
    private products: Product[];
    private deliveryGuy: DeliveryGuy | null;
    private status: OrderStatus;


    constructor(orderId: string, user: User, restaurant: Restaurant, products: Product[]) {
        this.orderId = orderId;
        this.user = user;
        this.restaurant = restaurant;
        this.products = products;
        this.deliveryGuy = null;
        this.status = OrderStatus.PENDING;
    }

    // Kuriér prijme objednávku
    acceptByDeliveryGuy(deliveryGuy: DeliveryGuy): boolean {
        if (this.status !== OrderStatus.PENDING) {
            console.log('Objednávka už bola prijatá alebo doručená');
            return false;
        }
        this.deliveryGuy = deliveryGuy;
        this.status = OrderStatus.ACCEPTED;
        console.log(`Objednávka ${this.orderId} prijatá kuriérom ${deliveryGuy.getName()}`);
        return true;
    }

    // Kuriér začne doručovať
    startDelivery(): boolean {
        if (this.status !== OrderStatus.ACCEPTED) {
            console.log('Objednávka musí byť najprv prijatá kuriérom');
            return false;
        }
        this.status = OrderStatus.IN_DELIVERY;
        console.log(`Objednávka ${this.orderId} je na ceste`);
        return true;
    }

    // Kuriér doručí objednávku
    completeDelivery(): boolean {
        if (this.status !== OrderStatus.IN_DELIVERY) {
            console.log('Objednávka nie je v doručovaní');
            return false;
        }
        this.status = OrderStatus.DELIVERED;
        console.log(`Objednávka ${this.orderId} doručená!`);
        return true;
    }

    getTotalPrice(): number {
        return this.products.reduce((sum, product) => sum + product.getPrice(), 0);
    }

    getStatus(): OrderStatus {
        return this.status;
    }

    getOrderId(): string {
        return this.orderId;
    }

    getUser(): User {
        return this.user;
    }

    getRestaurant(): Restaurant {
        return this.restaurant;
    }

    getProducts(): Product[] {
        return [...this.products];
    }

    getDeliveryGuy(): DeliveryGuy | null {
        return this.deliveryGuy;
    }

    getOrderInfo(): string {
        const productNames = this.products.map(p => p.getName()).join(', ');
        return `Objednávka ${this.orderId}: ${productNames} z ${this.restaurant.getName()} - Status: ${this.status}`;
    }
}