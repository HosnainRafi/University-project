// src/modules/academicSemester/academicSemester.model.ts

import { Schema, model } from "mongoose";
import { IAcademicSemester } from "./academicSemester.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from "./academicSemester.constant";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: { type: String, enum: AcademicSemesterName, required: true },
    year: { type: String, required: true },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
      unique: true,
    },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExist) {
    throw new Error("Semester already exist");
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
