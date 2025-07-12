// src/modules/academicSemester/academicSemester.controller.ts

import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { AcademicSemesterService } from "./academicSemester.service";
import { IAcademicSemester } from "./academicSemester.interface";

export const AcademicSemesterController = {
  createSemester: catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createSemester(req.body);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Academic Semester created successfully",
      data: result,
    });
  }),

  getAllSemesters: catchAsync(async (_req: Request, res: Response) => {
    const result = await AcademicSemesterService.getAllSemesters();
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semesters retrieved successfully",
      data: result,
    });
  }),

  getSingleSemester: catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSingleSemester(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Academic Semester not found",
      });
      return;
    }

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester retrieved successfully",
      data: result,
    });
  }),

  updateSemester: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.updateSemester(id, req.body);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
      return;
    }
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester updated successfully",
      data: result,
    });
  }),

  deleteSemester: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.deleteSemester(id);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
      return;
    }
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester deleted successfully",
      data: result,
    });
  }),
};
