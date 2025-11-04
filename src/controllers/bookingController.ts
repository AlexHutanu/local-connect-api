import { Types } from "mongoose";
import {
  createBooking,
  getBookings,
  getBookingsByProvider,
  deleteBooking,
  updateBookingStatus,
} from "../services/bookingService";
import { Request, Response } from "express";

export const createBookingController = async (req: Request, res: Response) => {
  const bookingData = req.body;
  const result = await createBooking(bookingData);
  res.status(result.status).json({
    message: result.message,
    booking: result.booking,
    error: result.error,
  });
};

export const getBookingsController = async (req: Request, res: Response) => {
  const result = await getBookings();
  res.status(result.status).json({
    message: result.message,
    bookings: result.bookings,
    error: result.error,
  });
};

export const getBookingsByProviderController = async (req: Request, res: Response) => {
  const providerId: Types.ObjectId = new Types.ObjectId(req.params.providerId);
  const result = await getBookingsByProvider(providerId);
    res.status(result.status).json({
    message: result.message,
    bookings: result.bookings,
    error: result.error,
  });
};

export const deleteBookingController = async (req: Request, res: Response) => {
  const bookingId: Types.ObjectId = new Types.ObjectId(req.params.bookingId);
  const result = await deleteBooking(bookingId);
    res.status(result.status).json({
    message: result.message,
    error: result.error,
  });
};

export const updateBookingStatusController = async (req: Request, res: Response) => {
  const bookingId: Types.ObjectId = new Types.ObjectId(req.params.bookingId);
  const { status } = req.body;
    const result = await updateBookingStatus(bookingId, status);
    res.status(result.status).json({
    message: result.message,
    booking: result.booking,
    error: result.error,
  });
};


