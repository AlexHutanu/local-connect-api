import express from 'express';
import { createUser } from '../services/userService';


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
};