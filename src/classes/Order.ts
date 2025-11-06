import {OrderItem} from "./OrderItem";

export enum OrderStatus {
    PENDING = "PENDING",
    PREPARING = "PREPARING",
    READY = "READY",
    SERVED = "SERVED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class Order {
    id: number;
    tableNumber: number;
    items: OrderItem[];
    status: OrderStatus;
    createdAt: Date;
    notes?: string;

    constructor(id: number, tableNumber: number, notes?: string) {
        this.id = id;
        this.tableNumber = tableNumber;
        this.items = [];
        this.status = OrderStatus.PENDING;
        this.createdAt = new Date();
        this.notes = notes;
    }

    setTableNumber(tableNumber: number) {
        this.tableNumber = tableNumber;
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