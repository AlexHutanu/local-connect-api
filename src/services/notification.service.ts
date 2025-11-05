import { Types } from "mongoose";
import { Notification } from "../models/notification.model";
import { getIO } from "../utils/socket";

export const createNotification = async (
  userId: string,
  title: string,
  message: string
) => {
  const notification = await Notification.create({ userId, title, message });

  const io = getIO();
  io.to(userId).emit("new-notification", notification);

  return notification;
};

export const getUserNotifications = async (userId: Types.ObjectId) => {
  try {
    const notifications = await Notification.find({ userId: userId });
    return {
      status: 200,
      message: "Notifications retrieved successfully",
      notifications: notifications,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error retrieving bookings",
      error: error,
    };
  }
};

export const markNotificationAsRead = async (notificationId: string) => {
  const notification = await Notification.findByIdAndUpdate(
    notificationId,
    { read: true },
    { new: true }
  );
  return notification;
};
