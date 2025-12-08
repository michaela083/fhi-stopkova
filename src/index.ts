import express from 'express';
import cors from 'cors';
import {Request, Response} from 'express';
import {
    createUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUserById
} from './services/user.service';
import {
    createOrder,
    deleteOrderById,
    getAllOrders,
    getOrderById,
    updateOrderById
} from './services/order.service';
import {
    createProduct,
    deleteProductById,
    getAllProducts,
    getProductById,
    updateProductById

} from './services/product.service';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running! 🚀');
});

// User routes
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.post('/users/', createUser);
app.put('/users/:id', updateUserById);
app.delete('/users/:id', deleteUserById);

// Order routes
app.get('/orders', getAllOrders);
app.get('/orders/:id', getOrderById);
app.post('/orders/', createOrder);
app.put('/orders/:id', updateOrderById);
app.delete('/orders/:id', deleteOrderById);

// Product routes
app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.post('/products/', createProduct);
app.put('/products/:id', updateProductById);
app.delete('/products/:id', deleteProductById);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})




// import {Shipment} from './classes/Shipment';
// import {Person} from './classes/Person';
// import {Package} from './classes/Package';
// import {DeliveryVan} from './classes/DeliveryVan';
// import {PackageBoxPanel} from './classes/PackageBoxPanel';
// import {PackageBox} from './classes/PackageBox';
//
// const person1 = new Person('Alice', '123 Main St');
// const person2 = new Person('Bob', '456 Elm St');
//
// const shipment1 = new Shipment(person1, person2);
//
// const package1 = new Package('1', 'Books', 2.5);
// const package2 = new Package('2', 'Clothes', 1.2);
//
// shipment1.addPackage(package1);
// shipment1.addPackage(package2);
//
// // console.log(shipment1);
// // console.log(shipment1.totalWeight());
//
// shipment1.deletePackage('1');
//
// // console.log(shipment1);
//
//
// const person3 = new Person("Adam Driver", "457 Elm St")
// const mainDeliveryVan = new DeliveryVan(500);
//
// mainDeliveryVan.addDriver(person3);
// mainDeliveryVan.addShipment(shipment1);
//
// const box1 = new PackageBox('1');
// const box2 = new PackageBox('2');
// const box3 = new PackageBox('3');
// const box4 = new PackageBox('4');
//
// const packageBoxPanel1 = new PackageBoxPanel('789 Main street', [box1, box2, box3, box4]);
//
// console.log(mainDeliveryVan);
// console.log(packageBoxPanel1);
//
// console.log('---------------------------------------------------------------');
//
// const shipments = mainDeliveryVan.emptyShipments();
//
// const shipment = shipments[0];
//
// if (shipment) {
//     packageBoxPanel1.addShipment('1', shipment);
// }
//
// console.log(mainDeliveryVan);
// console.log(packageBoxPanel1);
//
// console.log('---------------------------------------------------------------');
//
// const releasedPackage = packageBoxPanel1.emptyShipment('1111');
//
// console.log(releasedPackage);
// console.log(packageBoxPanel1);


/*
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

console.log('\n------------------------------------------------------\n');

 */
