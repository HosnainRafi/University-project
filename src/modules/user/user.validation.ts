import { z } from "zod";

export const orderSchema = z.object({
  productName: z.string({
    required_error: "Product name is required",
    invalid_type_error: "Product name must be a string",
  }),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a number",
  }),
});

export const userSchema = z.object({
  userId: z.number({
    required_error: "User ID is required",
    invalid_type_error: "User ID must be a number",
  }),

  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, { message: "Username must be at least 3 characters long" }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be at least 6 characters long" }),

  fullName: z.object({
    firstName: z
      .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
      })
      .min(1, { message: "First name cannot be empty" }),

    lastName: z
      .string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
      })
      .min(1, { message: "Last name cannot be empty" }),
  }),

  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(0, { message: "Age must be a positive number" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email format" }),

  isActive: z.boolean({
    required_error: "isActive flag is required",
    invalid_type_error: "isActive must be a boolean",
  }),

  hobbies: z.array(
    z.string({
      required_error: "Each hobby must be a string",
      invalid_type_error: "Hobby must be a string",
    }),
    {
      required_error: "Hobbies are required",
      invalid_type_error: "Hobbies must be an array of strings",
    }
  ),

  address: z.object({
    street: z.string({
      required_error: "Street is required",
      invalid_type_error: "Street must be a string",
    }),

    city: z.string({
      required_error: "City is required",
      invalid_type_error: "City must be a string",
    }),

    country: z.string({
      required_error: "Country is required",
      invalid_type_error: "Country must be a string",
    }),
  }),

  orders: z
    .array(orderSchema, {
      invalid_type_error: "Orders must be an array",
    })
    .optional(),

  isDeleted: z
    .boolean({
      invalid_type_error: "isDeleted must be a boolean",
    })
    .default(false),
});
