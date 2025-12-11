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
    name: string;
    surname: string;
    price: number;
    item: string;
    status: OrderStatus;
    date: string;

    constructor(id: number, name: string, surname: string, price: number, item: string, status: OrderStatus = OrderStatus.PENDING, date: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.price = price;
        this.item = item;
        this.status = OrderStatus.PENDING;
        this.date = date;
    }

    setName(name: string) {
        this.name = name;
    }

    setSurname(surname: string) {
        this.surname = surname;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setItems(item: string) {
        this.item = item;
    }

    setStatus(status: OrderStatus) {
        this.status = status;
    }

    setDate(date: string) {
        this.date = date;
    }


    getId(): number {
        return this.id;
    }

    /*
    addItem(item: OrderItem): void {
        this.item.push(item);
    }

    removeItem(itemId: number): void {
        this.item = this.item.filter(item => item.id !== itemId);
    }
     */

    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }


}