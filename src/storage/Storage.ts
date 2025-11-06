import {Product} from '../classes/Product';
import {User} from '../classes/User';
import {Order} from "../classes/Order";

export class Storage {
    private static instance: Storage;
    private users: User[];
    private products: Product[];
    private orders: Order[];
    private id: number;

    private constructor() {
        this.users = [];
        this.products = [];
        this.orders = [];
        this.id = 1;
    }

    static getInstance(): Storage {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new Storage();
            return this.instance;
        }
    }

    getNextId(): number {
        return this.id++;
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User | undefined {
        return this.getAllUsers().find(user => user.getId() === id);
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    deleteUserById(id: number) {
        this.users = this.users.filter(user => user.getId() !== id);
    }

    getAllOrders(): Order[] {
        return this.orders;
    }

    getOrdersById(id: number): Order | undefined {
        return this.getAllOrders().find(order => order.getId() === id);
    }

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    deleteOrderById(id: number) {
        this.orders = this.orders.filter(order => order.getId() !== id);
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.getAllProducts().find(product => product.getId() === id);
    }

    addProducts(product: Product): void {
        this.products.push(product);
    }

    deleteProductById(id: number) {
        this.products = this.products.filter(product => product.getId() !== id);
    }
}