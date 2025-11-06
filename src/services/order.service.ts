import {Request, Response} from 'express';
import {Storage} from '../storage/Storage';
import {Order} from '../classes/Order';
import {compareId, gatValidId, getObject} from '../utils/validations.utils';

const storage = Storage.getInstance();

export const getAllOrders = (req: Request, res: Response) => {
    res.send(storage.getAllOrders());
}

export const getOrderById = (req: Request, res: Response) => {
    const id = gatValidId(req, res);

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
    const order = new Order(storage.getNextId(), req.body.tableNumber, req.body.notes);
    storage.addOrder(order);
    res.status(201).send(order.getId());
}

export const updateOrderById = (req: Request, res: Response) => {
    const id = gatValidId(req, res);

    if (!id) {
        return;
    }

    const order = getObject(storage.getAllOrders(), (order) => compareId(order, id), res);
    if (!order) {
        return;
    }

    const tableNumber = req.body.tableNumber;
    if (tableNumber !== undefined) {
        order.setTableNumber(tableNumber);
    }

    const items = req.body.items;
    if (items !== undefined) {
        order.setItems(items);
    }

    const status = req.body.status;
    if (status !== undefined) {
        order.setStatus(status);
    }

    const notes = req.body.notes;
    if (notes !== undefined) {
        order.setNotes(notes);
    }

    res.send(void 0);
}

export const deleteOrderById = (req: Request, res: Response) => {
    const id = gatValidId(req, res);

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