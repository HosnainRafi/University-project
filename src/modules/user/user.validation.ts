// src/modules/user/user.validation.ts

import { z } from "zod";

export const createUserZodSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
  }),
});
