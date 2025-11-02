import express from 'express';
import { createBooking, getBookings, getBookingsByProvider, deleteBooking, updateBookingStatus } from '../services/bookingService';
import { Types } from 'mongoose';

export default (router: express.Router) => {
    router.post('/bookings', async (req, res) => {
        const bookingData = req.body;
        const result = await createBooking(bookingData);
        res.status(result.status).json({
            message: result.message,
            booking: result.booking,
            error: result.error
        });
    });

    router.get('/bookings', async (req, res) => {
        const result = await getBookings();
        res.status(result.status).json({
            message: result.message,
            bookings: result.bookings,
            error: result.error
        });
    });

    router.get('/bookings/provider/:providerId', async (req, res) => {
        const providerId: Types.ObjectId = new Types.ObjectId(req.params.providerId);
        const result = await getBookingsByProvider(providerId);
        res.status(result.status).json({
            message: result.message,
            bookings: result.bookings,
            error: result.error
        });
    });

    router.delete('/bookings/:bookingId', async (req, res) => {
        const bookingId: Types.ObjectId = new Types.ObjectId(req.params.bookingId);
        const result = await deleteBooking(bookingId);
        res.status(result.status).json({
            message: result.message,
            error: result.error
        });
    });

    router.put('/bookings/:bookingId/status', async (req, res) => {
        const bookingId: Types.ObjectId = new Types.ObjectId(req.params.bookingId);
        const { status } = req.body;
        const result = await updateBookingStatus(bookingId, status);
        res.status(result.status).json({
            message: result.message,
            booking: result.booking,
            error: result.error
        });
    });
}

