import { Types } from "mongoose";
import { UserModel } from "../models/userModel";

export const createUser = async (userData: any) => {
    try {
        const newUser = await UserModel.create(userData);
        console.log("User created successfully:", newUser);
        return { 
            status: 201,
            message: "User created successfully",
            user: newUser
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error creating user",
            error: error
        }
    }
}

export const getUserById = async (userId: Types.ObjectId) => {
    try {
        const user = await UserModel.findById(userId);
        if (user) {
            return {
                status: 200,
                message: "User retrieved successfully",
                user: user
            }
        } else {
            return {
                status: 404,
                message: "User not found"
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving user",
            error: error
        }
    }
}

export const deleteUser = async (userId: Types.ObjectId) => {
    try {
        await UserModel.findByIdAndDelete(userId);
        return {
            status: 200,
            message: "User deleted successfully"
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error deleting user",
            error: error
        }
    }
}

export const updateUser = async (userId: Types.ObjectId, userData: any) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
        if (updatedUser) {
            return {
                status: 200,
                message: "User updated successfully",
                user: updatedUser
            }
        } else {
            return {
                status: 404,
                message: "User not found"
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error updating user",
            error: error
        }
    }
}

export const getAllUsers = async () => {
    try {
        const users = await UserModel.find();
        return {
            status: 200,
            message: "Users retrieved successfully",
            users: users
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving users",
            error: error
        }
    }
}
