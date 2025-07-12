// src/modules/academicSemester/academicSemester.validation.ts

import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from "./academicSemester.constant";

export const createAcademicSemesterZodSchema = z.object({
  name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
  year: z
    .string()
    .min(4, "Year is required and must be a valid date (string)")
    .regex(/^\d{4}(-\d{2}-\d{2})?$/, "Year must be a valid date string"),
  code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
  startMonth: z.enum([...months] as [string, ...string[]]),
  endMonth: z.enum([...months] as [string, ...string[]]),
});
