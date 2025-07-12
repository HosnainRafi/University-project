// src/modules/academicSemester/academicSemester.service.ts

import { AcademicSemester } from "./academicSemester.model";
import { IAcademicSemester } from "./academicSemester.interface";
import { academicSEmesterNameCodeMapper } from "./academicSemester.constant";

export const AcademicSemesterService = {
  createSemester: async (
    payload: IAcademicSemester
  ): Promise<IAcademicSemester> => {
    if (academicSEmesterNameCodeMapper[payload.name] !== payload.code) {
      throw new Error("Invalid Semester code");
    }

    const result = await AcademicSemester.create(payload);
    return result;
  },

  getAllSemesters: async (): Promise<IAcademicSemester[]> => {
    return await AcademicSemester.find();
  },

  getSingleSemester: async (id: string): Promise<IAcademicSemester | null> => {
    return await AcademicSemester.findById(id);
  },

  updateSemester: async (
    id: string,
    payload: Partial<IAcademicSemester>
  ): Promise<IAcademicSemester | null> => {
    return await AcademicSemester.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteSemester: async (id: string): Promise<IAcademicSemester | null> => {
    return await AcademicSemester.findByIdAndDelete(id);
  },
};
