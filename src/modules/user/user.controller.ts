import { Request, Response, NextFunction } from "express";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getSingleUserService,
  updateUserService,
  addOrderToUserService,
  getUserOrdersService,
  calculateTotalOrderPriceService,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsersService();
    res.json({
      success: true,
      message: "Users fetched successfully!",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getSingleUserService(+req.params.userId);
    res.json({
      success: true,
      message: "User fetched successfully!",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await updateUserService(+req.params.userId, req.body);
    res.json({
      success: true,
      message: "User updated successfully!",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = +req.params.userId;
    await deleteUserService(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const addOrderToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addOrderToUserService(+req.params.userId, req.body);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

export const getUserOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getUserOrdersService(+req.params.userId);
    res.json({
      success: true,
      message: "Order fetched successfully!",
      data: { orders },
    });
  } catch (err) {
    next(err);
  }
};

export const calculateTotalOrderPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const totalPrice = await calculateTotalOrderPriceService(
      +req.params.userId
    );
    res.json({
      success: true,
      message: "Total price calculated successfully!",
      data: { totalPrice },
    });
  } catch (err) {
    next(err);
  }
};
