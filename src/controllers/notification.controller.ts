import { Request, Response } from "express";
import { Types } from 'mongoose';
import {
  getUserNotifications,
  markNotificationAsRead,
} from "../services/notification.service";


export const getNotifications = async (req: Request, res: Response) => {
    const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
    const result = await getUserNotifications(userId);
        res.status(result.status).json({
        message: result.message,
        notifications: result.notifications
    });
};

export const markAsRead = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await markNotificationAsRead(id);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error marking notification as read", error });
    }
}