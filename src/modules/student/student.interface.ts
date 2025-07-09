// student.interface.ts

import { Types } from "mongoose";

export interface IGuardian {
  name: string;
  occupation: string;
  contactNo: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
}

export interface IStudent {
  _id?: Types.ObjectId;
  id: string;
  name: string;
  user: Types.ObjectId;
  gender: "male" | "female" | "other";
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImage?: string | null;
  admissionSemester: Types.ObjectId; // Can be ObjectId or populated object
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
