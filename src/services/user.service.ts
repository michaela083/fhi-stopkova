import {Request, Response} from 'express';
import {Storage} from '../storage/Storage';
import {User} from '../classes/User';
import {compareId, getValidId, getObject} from '../utils/validations.utils';

const storage = Storage.getInstance();

export const getAllUsers = (req: Request, res: Response) => {
    res.send(storage.getAllUsers());
}

export const getUserById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const user = getObject(storage.getAllUsers(), (user) => compareId(user, id), res);
    if (!user) {
        return;
    }

    res.send(user);
}

export const createUser = (req: Request, res: Response) => {
    const user = new User(
        storage.getNextId(),
        req.body.name,
        req.body.surname,
        req.body.email
    );
    storage.addUser(user);
    res.status(201).send(user.getId());
}

export const updateUserById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const user = getObject(storage.getAllUsers(), (user) => compareId(user, id), res);
    if (!user) {
        return;
    }

    const name = req.body.name;
    if (name) {
        user.setName(name);
    }

    res.send(void 0);
}

export const deleteUserById = (req: Request, res: Response) => {
    const id = getValidId(req, res);

    if (!id) {
        return;
    }

    const user = getObject(storage.getAllUsers(), (user) => compareId(user, id), res);
    if (!user) {
        return;
    }

    storage.deleteUserById(id);

    res.send(void 0);
}