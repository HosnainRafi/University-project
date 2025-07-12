// student.validation.ts
import { z } from "zod";

const guardianSchema = z.object({
  name: z.string().min(1, "Guardian name is required"),
  occupation: z.string().min(1, "Guardian occupation is required"),
  contactNo: z.string().min(1, "Guardian contact number is required"),
});

export const createStudentZodSchema = z.object({
  password: z
    .string()
    .min(6, "Password is required and must be at least 6 characters"),
  student: z.object({
    name: z.string().min(1, "Name is required"),
    gender: z.enum(["male", "female", "other"]),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    email: z.string().email("Invalid email address"),
    contactNo: z.string().min(1, "Contact number is required"),
    emergencyContactNo: z
      .string()
      .min(1, "Emergency contact number is required"),
    presentAddress: z.string().min(1, "Present address is required"),
    permanentAddress: z.string().min(1, "Permanent address is required"),
    guardian: guardianSchema,
    localGuardian: guardianSchema,
    profileImage: z.string().nullable().optional(),
    admissionSemester: z.string().min(1, "Admission semester is required"),
  }),
});
