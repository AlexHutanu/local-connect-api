import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
    createService,
    getServices,
    getServicesByUser,
    updateService,
    deleteService
} from '../services/serviceService';

export const createServiceController = async (req: Request, res: Response) => {
    const serviceData = req.body;
    const result = await createService(serviceData);
    res.status(result.status).json({
        message: result.message,
        service: result.service,
        error: result.error
    });
};

export const getServicesController = async (req: Request, res: Response) => {
    const result = await getServices();
    res.status(result.status).json({
        message: result.message,
        services: result.services,
        error: result.error
    });
};

export const getServicesByUserController = async (req: Request, res: Response) => {
    const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
    const result = await getServicesByUser(userId);
    res.status(result.status).json({
        message: result.message,
        services: result.services,
        error: result.error
    });
};

export const updateServiceController = async (req: Request, res: Response) => {
    const serviceId: Types.ObjectId = new Types.ObjectId(req.params.serviceId);
    const updateData = req.body;
    const result = await updateService(serviceId, updateData);
    res.status(result.status).json({
        message: result.message,
        service: result.service,
        error: result.error
    });
};

export const deleteServiceController = async (req: Request, res: Response) => {
    const serviceId: Types.ObjectId = new Types.ObjectId(req.params.serviceId);
    const result = await deleteService(serviceId);
    res.status(result.status).json({
        message: result.message,
        error: result.error
    });
};