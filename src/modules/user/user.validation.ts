// src/modules/user/user.validation.ts

import { z } from "zod";

export const createUserZodSchema = z.object({
  body: z.object({
    // id: z.string().min(1, "ID is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
    // needsPasswordChange: z.boolean().optional(),
    // role: z.enum(["student", "faculty", "admin"]),
    // status: z
    //   .enum(["in-progress", "blocked"])
    //   .default("in-progress")
    //   .optional(),
  }),
  // isDeleted: z.boolean().optional().default(false),
});
