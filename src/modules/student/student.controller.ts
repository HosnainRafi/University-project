// student.controller.ts

import { Request, Response } from "express";
// import catchAsync from "../../shared/catchAsync";
// import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { StudentService } from "./student.service";
import { IStudent } from "./student.interface";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";

export const StudentController = {
  getAllStudents: catchAsync(async (req: Request, res: Response) => {
    const result = await StudentService.getAllStudents();
    if (!result) {
      throw new Error("Student not found");
    }
    sendResponse<IStudent[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  }),

  getSingleStudent: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await StudentService.getSingleStudent(id);
    if (!result) {
      throw new Error("Student not found");
    }
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  }),

  updateStudent: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await StudentService.updateStudent(id, updatedData);
    if (!result) {
      throw new Error("Student not found");
    }
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student updated successfully",
      data: result,
    });
  }),

  deleteStudent: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await StudentService.deleteStudent(id);
    if (!result) {
      throw new Error("Student not found");
    }
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  }),
};
