// src/modules/academicSemester/academicSemester.interface.ts

import { Types } from "mongoose";

export type IMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type IAcademicSemesterName = "Autumn" | "Summer" | "Fall";
export type IAcademicSemesterCode = "01" | "02" | "03";

export interface IAcademicSemester {
  _id?: Types.ObjectId;
  name: IAcademicSemesterName;
  year: string;
  code: IAcademicSemesterCode;
  startMonth: IMonths;
  endMonth: IMonths;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IAcademicSEmesterNameCodeMapper = {
  [key: string]: string;
};
