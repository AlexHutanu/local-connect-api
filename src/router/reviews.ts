import express from "express";
import {
  createReviewController,
  getReviewsController,
  getReviewsByUserController,
  deleteReviewController,
  updateReviewController,
} from "controllers/reviewController";

export default (router: express.Router) => {
  router.post("/reviews", createReviewController);

  router.get("/reviews", getReviewsController);

  router.get("/reviews/user/:userId", getReviewsByUserController);

  router.put("/reviews/:reviewId", updateReviewController);

  router.delete("/reviews/:reviewId", deleteReviewController);
};
