// student.service.ts

import { IStudent } from "./student.interface";
import { Student } from "./student.model";

export const StudentService = {
  getAllStudents: async (): Promise<IStudent[]> => {
    const result = await Student.find();
    return result;
  },

  getSingleStudent: async (id: string): Promise<IStudent | null> => {
    const result = await Student.findById(id);
    return result;
  },

  updateStudent: async (
    id: string,
    payload: Partial<IStudent>
  ): Promise<IStudent | null> => {
    const result = await Student.findByIdAndUpdate(id, payload, { new: true });
    return result;
  },

  deleteStudent: async (id: string): Promise<IStudent | null> => {
    const result = await Student.findByIdAndDelete(id);
    return result;
  },
};
