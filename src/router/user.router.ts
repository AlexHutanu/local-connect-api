import express from "express";
import {
  createUserController,
  getUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";

export default (router: express.Router) => {
  router.post("/users", createUserController);

  router.get("/users/:userId", getUserController);

  router.get("/users", getAllUsersController);

  router.put("/users/:userId", updateUserController);

  router.delete("/users/:userId", deleteUserController);
};
