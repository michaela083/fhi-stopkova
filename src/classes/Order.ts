import {OrderItem} from "./OrderItem";

export enum OrderStatus {
    PENDING = "PENDING",
    PREPARING = "PREPARING",
    READY = "READY",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class Order {
    id: number;
    userId: number;
    items: OrderItem[];
    status: OrderStatus;
    createdAt: Date;
    notes?: string;

    constructor(id: number, userId: number, notes?: string) {
        this.id = id;
        this.userId = userId;
        this.items = [];
        this.status = OrderStatus.PENDING;
        this.createdAt = new Date();
        this.notes = notes;
    }

    setItems(items: OrderItem[]) {
        this.items = items;
    }

    setStatus(status: OrderStatus) {
        this.status = status;
    }

    setNotes(notes?: string) {
        this.notes = notes;
    }

    getId(): number {
        return this.id;
    }

    addItem(item: OrderItem): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getTotalInCents(): number {
        return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
    }

    getFormattedTotal(): string {
        return `$${(this.getTotalInCents() / 100).toFixed(2)}`;
    }

    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }

}