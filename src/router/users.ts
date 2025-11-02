import express from 'express';
import { createUser, getAllUsers, getUserById, deleteUser, updateUser } from '../services/userService';
import { Types } from 'mongoose';


export default (router: express.Router) => {
    router.post('/users', async (req, res) => {
        const userData = req.body;
        const result = await createUser(userData);
        res.status(result.status).json({
            message: result.message,
            user: result.user,
            error: result.error
        });
    })

    router.get('/users', async (req, res) => {
        const result = await getAllUsers();
        res.status(result.status).json({
            message: result.message,
            users: result.users,
            error: result.error
        });
    });

    router.get('/users/:userId', async (req, res) => {
        const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
        const result = await getUserById(userId);
        res.status(result.status).json({
            message: result.message,
            user: result.user,
            error: result.error
        });
    });

    router.delete('/users/:userId', async (req, res) => {
        const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
        const result = await deleteUser(userId);
        res.status(result.status).json({
            message: result.message,
            error: result.error
        });
    });

    router.put('/users/:userId', async (req, res) => {
        const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
        const userData = req.body;
        const result = await updateUser(userId, userData);
        res.status(result.status).json({
            message: result.message,
            user: result.user,
            error: result.error
        });
    });
};