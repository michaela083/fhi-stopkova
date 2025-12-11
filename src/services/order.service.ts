import {Request, Response} from 'express';
import {Storage} from '../storage/Storage';
import {Order} from '../classes/Order';
import {compareId, getValidId, getObject} from '../utils/validations.utils';

const storage = Storage.getInstance();

export const getAllOrders = (req: Request, res: Response) => {
    res.send(storage.getAllOrders());
}

export const getOrderById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const order = getObject(storage.getAllOrders(), (order) => compareId(order, id), res);
    if (!order) {
        return;
    }

    res.send(order);
}

export const createOrder = (req: Request, res: Response) => {
    const order = new Order(
        storage.getNextId(),
        req.body.name,
        req.body.surname,
        req.body.price,
        req.body.item,
        req.body.status,
        req.body.date);

    storage.addOrder(order);
    res.status(201).send(order.getId());
}

export const updateOrderById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const order = getObject(storage.getAllOrders(), (order) => compareId(order, id), res);
    if (!order) {
        return;
    }

    const name = req.body.name;
    if (name !== undefined) {
        order.setName(name);
    }

    const surname = req.body.surname;
    if (surname !== undefined) {
        order.setSurname(surname);
    }

    const price = req.body.price;
    if (price !== undefined) {
        order.setPrice(price);
    }

    const items = req.body.items;
    if (items !== undefined) {
        order.setItems(items);
    }

    const status = req.body.status;
    if (status !== undefined) {
        order.setStatus(status);
    }

    const date = req.body.date;
    if (date !== undefined) {
        order.setDate(date);
    }

    res.send(void 0);
}

export const deleteOrderById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const order = getObject(storage.getAllOrders(), (order) => compareId(order, id), res);
    if (!order) {
        return;
    }

    storage.deleteOrderById(id);

    res.send(void 0);
}