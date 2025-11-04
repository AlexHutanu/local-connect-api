import express from "express";
import {
  createBookingController,
  getBookingsController,
  getBookingsByProviderController,
  deleteBookingController,
  updateBookingStatusController,
} from "../controllers/bookingController";

export default (router: express.Router) => {
  router.post("/bookings", createBookingController);

  router.get("/bookings", getBookingsController);

  router.get("/bookings/provider/:providerId", getBookingsByProviderController);

  router.delete("/bookings/:bookingId", deleteBookingController);

  router.put("/bookings/:bookingId/status", updateBookingStatusController);
};
