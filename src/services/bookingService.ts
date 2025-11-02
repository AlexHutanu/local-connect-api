import { Types } from "mongoose";
import { BookingModel } from "../models/bookingModel";

export const createBooking = async (bookingData: any) => {
    try {
        const newBooking = await BookingModel.create(bookingData);
        console.log("Booking created successfully:", newBooking);
        return { 
            status: 201,
            message: "Booking created successfully",
            booking: newBooking
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error creating booking",
            error: error
        }
    }
}

export const getBookings = async () => {
    try {
        const bookings = await BookingModel.find();
        return {
            status: 200,
            message: "Bookings retrieved successfully",
            bookings: bookings
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving bookings",
            error: error
        }
    }
}

export const getBookingsByProvider = async (providerId: Types.ObjectId) => {
    try {
        const bookings = await BookingModel.find({ providerId: providerId });
        return {
            status: 200,
            message: "Bookings retrieved successfully",
            bookings: bookings
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving bookings",
            error: error
        }
    }
}

export const deleteBooking = async (bookingId: Types.ObjectId) => {
    try {
        await BookingModel.findByIdAndDelete(bookingId);
        return {
            status: 200,
            message: "Booking deleted successfully"
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error deleting booking",
            error: error
        }
    }
}

export const updateBookingStatus = async (bookingId: Types.ObjectId, status: string) => {
    try {
        const updatedBooking = await BookingModel.findByIdAndUpdate(bookingId, { status: status }, { new: true });
        return {
            status: 200,
            message: "Booking status updated successfully",
            booking: updatedBooking
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error updating booking status",
            error: error
        }
    }
}


            