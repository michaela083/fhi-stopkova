import { User } from './classes/User'
import {Restaurant} from "./classes/Restaurant";
import {DeliveryGuy} from "./classes/DeliveryGuy";

const user1 = new User('u001', 'Anna', '09876543', 'Main St 12')
const user2 = new User('u002', 'John', '12345678', 'Main St 456')

console.log(user1)
console.log(user2)

const deliveryGuy1 = new DeliveryGuy('u003', 'Jane', '98765432')
const deliveryGuy2 = new DeliveryGuy('u004', 'Bob', '12345678')

console.log(deliveryGuy1)
console.log(deliveryGuy2)

const restaurant1 = new Restaurant('Italian Restaurant', 'Main St 765', '094...');
const pizza = restaurant1.addProduct('Margherita', 8.50);
const pasta = restaurant1.addProduct('Carbonara', 9.00);

const restaurant2 = new Restaurant('Japanese Restaurant', 'Main St 70', '093...');
const sushi = restaurant2.addProduct('Sushi', 10.00);
const ramen = restaurant2.addProduct('Ramen', 11.00);

console.log(restaurant1.getMenu() + '\n');
console.log(restaurant2.getMenu());

console.log('\n------------------------------------------------------\n');

// vytvorenie objednávky userom
const order1 = user1.createOrder('ORD001', restaurant1, [pizza, pasta]);
console.log(order1.getOrderInfo());
console.log(`Celková suma: ${order1.getTotalPrice()}€\n`);

// prijatie objednávky kuriérom
deliveryGuy1.acceptOrder(order1);
console.log(order1.getOrderInfo() + '\n');

// doručovanie objednávky
deliveryGuy1.startDelivery(order1);
console.log(order1.getOrderInfo() + '\n');

// objednávka doručená
deliveryGuy1.deliverOrder(order1);
console.log(order1.getOrderInfo());

console.log(`\nKuriér ${deliveryGuy1.getName()} má ${deliveryGuy1.getActiveOrders().length} aktívnych objednávok`);
console.log(`Kuriér ${deliveryGuy1.getName()} doručil ${deliveryGuy1.getDeliveredOrders().length} objednávok`);
