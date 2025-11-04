import { Types } from "mongoose";
import { ServiceModel } from "../models/service.model";

export const createService = async (serviceData: any) => {
    try {
        const newService = await ServiceModel.create(serviceData);
        console.log("Service created successfully:", newService);
        return { 
            status: 201,
            message: "Service created successfully",
            service: newService
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error creating service",
            error: error
        }
    }
}

export const getServices = async () => {
    try {
        const services = await ServiceModel.find();
        return {
            status: 200,
            message: "Services retrieved successfully",
            services: services
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving services",
            error: error
        }
    }
}

export const getServicesByUser = async (userId: Types.ObjectId) => {
    try {
        const services = await ServiceModel.find({ userId: userId });
        return {
            status: 200,
            message: "Services retrieved successfully",
            services: services
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving services",
            error: error
        }
    }
}

export const deleteService = async (serviceId: Types.ObjectId) => {
    try {
        await ServiceModel.findByIdAndDelete(serviceId);
        return {
            status: 200,
            message: "Service deleted successfully"
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error deleting service",
            error: error
        }
    }
}

export const updateService = async (serviceId: Types.ObjectId, updateData: any) => {
    try {
        const updatedService = await ServiceModel.findByIdAndUpdate(serviceId, updateData, { new: true });
        return {
            status: 200,
            message: "Service updated successfully",
            service: updatedService
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error updating service",
            error: error
        }
    }
}