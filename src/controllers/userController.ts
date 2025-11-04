import { Request, Response } from "express";
import { Types } from "mongoose";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/userService";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await createUser(userData);
  res.status(result.status).json({
    message: result.message,
    user: result.user,
    error: result.error,
  });
};

export const getUserController = async (req: Request, res: Response) => {
  const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
  const result = await getUserById(userId);
  res.status(result.status).json({
    message: result.message,
    user: result.user,
    error: result.error,
  });
};

export const updateUserController = async (req: Request, res: Response) => {
  const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
  const updateData = req.body;
  const result = await updateUser(userId, updateData);
  res.status(result.status).json({
    message: result.message,
    user: result.user,
    error: result.error,
  });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
  const result = await deleteUser(userId);
  res.status(result.status).json({
    message: result.message,
    error: result.error,
  });
};

export const getAllUsersController = async (req: Request, res: Response) => {
  const result = await getAllUsers();
  res.status(result.status).json({
    message: result.message,
    users: result.users,
    error: result.error,
  });
};
