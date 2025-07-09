// src/modules/user/user.interface.ts

import { Types } from "mongoose";

export type UserRole = "student" | "faculty" | "admin";

export interface IUser {
  _id?: Types.ObjectId;
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: UserRole;
  status: "in-progress" | "blocked";
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
