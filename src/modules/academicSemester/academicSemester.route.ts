// src/modules/academicSemester/academicSemester.route.ts

import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { createAcademicSemesterZodSchema } from "./academicSemester.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
router.get("/", AcademicSemesterController.getAllSemesters);
router.get("/:id", AcademicSemesterController.getSingleSemester);
router.patch("/:id", AcademicSemesterController.updateSemester);
router.delete("/:id", AcademicSemesterController.deleteSemester);

export const AcademicSemesterRoutes = router;
