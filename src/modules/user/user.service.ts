// src/modules/user/user.service.ts

import config from "../../app/config";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const UserService = {
  createStudent: async (
    password: string,
    studentData: IStudent
  ): Promise<IStudent> => {
    const user: Partial<IUser> = {};

    user.password = password || (config.default_pass as string);
    user.role = "student";
    user.id = "2030100001";

    // ✅ Create the user first
    const result = await User.create(user);

    // ✅ Ensure user was created
    if (result && result._id) {
      studentData.id = result.id;
      (studentData as any).user = result._id; //referencing to a `user` field
      const studentResult = await Student.create(studentData);
      return studentResult;
    }

    throw new Error("Failed to create user");
  },

  createUser: async (payload: IUser): Promise<IUser> => {
    const result = await User.create(payload);
    return result;
  },

  getAllUsers: async (): Promise<IUser[]> => {
    const result = await User.find();
    return result;
  },

  getUserById: async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
  },

  deleteUser: async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id);
  },
};
