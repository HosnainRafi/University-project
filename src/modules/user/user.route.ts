import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrderToUser,
  getUserOrders,
  calculateTotalOrderPrice,
} from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { orderSchema, userSchema } from "./user.validation";
//import { userSchema, orderSchema } from "./user.validation";

const router = express.Router();

router.post("/", validateRequest(userSchema), createUser);
router.get("/", getAllUsers);
router.get("/:userId", getSingleUser);
router.put("/:userId", validateRequest(userSchema), updateUser);
router.delete("/:userId", deleteUser);

// Order-related
router.put("/:userId/orders", validateRequest(orderSchema), addOrderToUser);
router.get("/:userId/orders", getUserOrders);
router.get("/:userId/orders/total-price", calculateTotalOrderPrice);

export const userRoutes = router;
