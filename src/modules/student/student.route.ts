// student.route.ts

import express from "express";
import { StudentController } from "./student.controller";
import { createStudentZodSchema } from "./student.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getSingleStudent);
router.patch("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent);

export const StudentRoutes = router;
