import express from 'express';
import { createReview, getReviews, getReviewsByUser, deleteReview, updateReview } from '../services/reviewService';
import { Types } from 'mongoose';

export default (router: express.Router) => {
    router.post('/reviews', async (req, res) => {
        const reviewData = req.body;
        const result = await createReview(reviewData);
        res.status(result.status).json({
            message: result.message,
            review: result.review,
            error: result.error
        });
    });

    router.get('/reviews', async (req, res) => {
        const result = await getReviews();
        res.status(result.status).json({
            message: result.message,
            reviews: result.reviews,
            error: result.error
        });
    });

    router.get('/reviews/user/:userId', async (req, res) => {
        const userId: Types.ObjectId = new Types.ObjectId(req.params.userId);
        const result = await getReviewsByUser(userId);
        res.status(result.status).json({
            message: result.message,
            reviews: result.reviews,
            error: result.error
        });
    });

    router.delete('/reviews/:reviewId', async (req, res) => {
        const reviewId: Types.ObjectId = new Types.ObjectId(req.params.reviewId);
        const result = await deleteReview(reviewId);
        res.status(result.status).json({
            message: result.message,
            error: result.error
        });
    });

    router.put('/reviews/:reviewId', async (req, res) => {
        const reviewId: Types.ObjectId = new Types.ObjectId(req.params.reviewId);
        const reviewData = req.body;
        const result = await updateReview(reviewId, reviewData);
        res.status(result.status).json({
            message: result.message,
            review: result.review,
            error: result.error
        });
    });
}
