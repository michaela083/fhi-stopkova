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

const restaurant = new Restaurant("Italian Restaurant", "Bratislava", "+421...");
const pizza = restaurant.addProduct("Margherita", 8.50);
const pasta = restaurant.addProduct("Carbonara", 9.00);

console.log(restaurant.getMenu());
console.log(pizza.getRestaurant().getName());
console.log(pasta.getName());

// === PROCES OBJEDNÁVKY ===
console.log('\n=== VYTVORENIE A DORUCENIE OBJEDNAVKY ===\n');

// 1. User vytvorí objednávku
const order1 = user1.createOrder('ORD001', restaurant, [pizza, pasta]);
console.log(order1.getOrderInfo());
console.log(`Celková suma: ${order1.getTotalPrice()}€\n`);

// 2. Kuriér prijme objednávku
deliveryGuy1.acceptOrder(order1);
console.log(order1.getOrderInfo() + '\n');

// 3. Kuriér začne doručovať
deliveryGuy1.startDelivery(order1);
console.log(order1.getOrderInfo() + '\n');

// 4. Kuriér doručí objednávku
deliveryGuy1.deliverOrder(order1);
console.log(order1.getOrderInfo());
console.log(`\nKuriér ${deliveryGuy1.getName()} má ${deliveryGuy1.getActiveOrders().length} aktívnych objednávok`);
console.log(`Kuriér ${deliveryGuy1.getName()} doručil ${deliveryGuy1.getDeliveredOrders().length} objednávok`);