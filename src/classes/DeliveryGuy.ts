import { Person } from './Person';
import { Order } from './Order';

export class DeliveryGuy extends Person {
    private activeOrders: Order[];
    private deliveredOrders: Order[];

    constructor(id: string, name: string, phone: string) {
        super(id, name, phone);
        this.activeOrders = [];
        this.deliveredOrders = [];
    }

    // Prijme objednávku
    acceptOrder(order: Order): boolean {
        if (order.acceptByDeliveryGuy(this)) {
            this.activeOrders.push(order);
            return true;
        }
        return false;
    }

    // Začne doručovať
    startDelivery(order: Order): boolean {
        return order.startDelivery();
    }

    // Doručí objednávku
    deliverOrder(order: Order): boolean {
        if (order.completeDelivery()) {
            const index = this.activeOrders.indexOf(order);
            if (index > -1) {
                this.activeOrders.splice(index, 1);
                this.deliveredOrders.push(order);
            }
            return true;
        }
        return false;
    }

    getActiveOrders(): Order[] {
        return [...this.activeOrders];
    }

    getDeliveredOrders(): Order[] {
        return [...this.deliveredOrders];
    }
}
