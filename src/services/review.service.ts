import { Types } from "mongoose";
import { ReviewModel } from "../models/review.model";

export const createReview = async (reviewData: any) => {
    try {
        const newReview = await ReviewModel.create(reviewData);
        console.log("Review created successfully:", newReview);
        return { 
            status: 201,
            message: "Review created successfully",
            review: newReview
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error creating review",
            error: error
        }
    }
}

export const getReviewsByUser = async (userId: Types.ObjectId) => {
    try {
        const reviews = await ReviewModel.find({ userId: userId });
        return {
            status: 200,
            message: "Reviews retrieved successfully",
            reviews: reviews
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving reviews",
            error: error
        }
    }
}

export const getReviews = async () => {
    try {
        const reviews = await ReviewModel.find();
        return {
            status: 200,
            message: "Reviews retrieved successfully",
            reviews: reviews
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error retrieving reviews",
            error: error
        }
    }
}

export const deleteReview = async (reviewId: Types.ObjectId) => {
    try {
        await ReviewModel.findByIdAndDelete(reviewId);
        return {
            status: 200,
            message: "Review deleted successfully"
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error deleting review",
            error: error
        }
    }
}

export const updateReview = async (reviewId: Types.ObjectId, reviewData: any) => {
    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate(reviewId, reviewData, { new: true });
        return {
            status: 200,
            message: "Review updated successfully",
            review: updatedReview
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error updating review",
            error: error
        }
    }
}