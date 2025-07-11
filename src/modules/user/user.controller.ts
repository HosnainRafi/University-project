import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import { IStudent } from "../student/student.interface";

export const UserController = {
  createStudent: catchAsync(async (req, res) => {
    const { password, student } = req.body;
    const result = await UserService.createStudent(password, student);
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  }),

  createUser: catchAsync(async (req, res) => {
    const result = await UserService.createUser(req.body);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User created successfully",
      data: result,
    });
  }),

  getAllUsers: catchAsync(async (_req, res) => {
    const result = await UserService.getAllUsers();
    sendResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  }),

  getUserById: catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserService.getUserById(id);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  }),

  deleteUser: catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    if (!result) {
      throw new Error("Student not found"); // or handle with a proper error response
    }
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  }),
};
