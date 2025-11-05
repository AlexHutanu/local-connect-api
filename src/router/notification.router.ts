import express from "express";
import {
  getNotifications,
  markAsRead,
} from "../controllers/notification.controller";
import { isAuth } from "../middleware/isAuth";

export default (router: express.Router) => {
    router.get("/notifications/:userId", getNotifications);
    router.put("/notifications/:id/read", markAsRead);
};