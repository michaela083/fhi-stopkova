import {Request, Response} from 'express';
import {Storage} from '../storage/Storage';
import {Product} from '../classes/Product';
import {compareId, getValidId, getObject} from '../utils/validations.utils';

const storage = Storage.getInstance();

export const getAllProducts = (req: Request, res: Response) => {
    res.send(storage.getAllProducts());
}

export const getProductById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const product = getObject(storage.getAllProducts(), (product) => compareId(product, id), res);
    if (!product) {
        return;
    }

    res.send(product);
}

export const createProduct = (req: Request, res: Response) => {
    const product = new Product(
        storage.getNextId(),
        req.body.name,
        req.body.price,
        req.body.description
    );
    storage.addProducts(product);
    res.status(201).send(product.getId());
}

export const updateProductById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const product = getObject(storage.getAllProducts(), (product) => compareId(product, id), res);
    if (!product) {
        return;
    }

    const name = req.body.name;
    if (name) {
        product.setName(name);
    }

    const price = req.body.price;
    if (price !== undefined) {
        product.setPrice(price);
    }

    const description = req.body.description;
    if (description) {
        product.setDescription(description);
    }

    res.send(void 0);
}

export const deleteProductById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const product = getObject(storage.getAllProducts(), (person) => compareId(person, id), res);
    if (!product) {
        return;
    }

    storage.deleteProductById(id);

    res.send(void 0);
}