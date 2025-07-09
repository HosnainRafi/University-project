// src/modules/user/user.route.ts

import express from "express";
import { UserController } from "./user.controller";

import { createUserZodSchema } from "./user.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import { createStudentZodSchema } from "../student/student.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(createStudentZodSchema),
  UserController.createStudent
);

router.post(
  "/",
  validateRequest(createUserZodSchema),
  UserController.createUser
);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
