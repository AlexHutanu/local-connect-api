import {Types} from "mongoose";
import {
    createReview,
    getReviews,
    getReviewsByUser,
    deleteReview,
    updateReview
} from "../services/reviewService";
import {Request, Response} from "express";

export const createReviewController = async (req: Request, res: Response) => {
    const reviewData = req.body;
    const result = await createReview(reviewData);
    res.status(result.status).json({
        message: result.message,
        review: result.review,
        error: result.error
    });
};

export const getReviewsController = async (req: Request, res: Response) => {
    const result = await getReviews();
    res.status(result.status).json({
        message: result.message,
        reviews: result.reviews,
        error: result.error
    });
};

export const getReviewsByUserController = async (req: Request, res: Response) => {
    const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
    const result = await getReviewsByUser(userId);
    res.status(result.status).json({
        message: result.message,
        reviews: result.reviews,
        error: result.error
    });
};

export const updateReviewController = async (req: Request, res: Response) => {
    const reviewId: Types.ObjectId = new Types.ObjectId(req.params.reviewId);
    const updateData = req.body;
    const result = await updateReview(reviewId, updateData);
    res.status(result.status).json({
        message: result.message,
        review: result.review,
        error: result.error
    });
};

export const deleteReviewController = async (req: Request, res: Response) => {
    const reviewId: Types.ObjectId = new Types.ObjectId(req.params.reviewId);
    const result = await deleteReview(reviewId);
    res.status(result.status).json({
        message: result.message,
        error: result.error
    });
};
