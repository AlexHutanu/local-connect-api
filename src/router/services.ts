import express from 'express';
import {getServices, getServicesByUser, deleteService, updateService, createService} from "../services/serviceService";
import { Types } from 'mongoose';

export default (router: express.Router) => {
    router.post('/services', async (req, res) => {
        const serviceData = req.body;
        const result = await createService(serviceData);
        res.status(result.status).json({
            message: result.message,
            service: result.service,
            error: result.error
        });
    });

    router.get('/services', async (req, res) => {
        const result = await getServices();
        res.status(result.status).json({
            message: result.message,
            services: result.services,
            error: result.error
        });
    });

    router.get('/services/user/:userId', async (req, res) => {
        const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
        const result = await getServicesByUser(userId);
        res.status(result.status).json({
            message: result.message,
            services: result.services,
            error: result.error
        });
    });

    router.delete('/services/:serviceId', async (req, res) => {
        const serviceId: Types.ObjectId = new Types.ObjectId(req.params.serviceId);
        const result = await deleteService(serviceId);
        res.status(result.status).json({
            message: result.message,
            error: result.error
        });
    })

    router.put('/services/:serviceId', async (req, res) => {
        const serviceId: Types.ObjectId = new Types.ObjectId(req.params.serviceId);
        const serviceData = req.body;
        const result = await updateService(serviceId, serviceData);
        res.status(result.status).json({
            message: result.message,
            service: result.service,
            error: result.error
        });
    });
}
