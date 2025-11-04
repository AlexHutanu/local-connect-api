import express from 'express';
import {
    createServiceController,
    getServicesController,
    getServicesByUserController,
    updateServiceController,
    deleteServiceController,
} from '../controllers/service.controller';

export default (router: express.Router) => {
    router.post('/services', createServiceController);

    router.get('/services', getServicesController);

    router.get('/services/user/:userId', getServicesByUserController);

    router.put('/services/:serviceId', updateServiceController);

    router.delete('/services/:serviceId', deleteServiceController);
}
