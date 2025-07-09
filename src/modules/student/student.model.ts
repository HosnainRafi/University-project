// student.model.ts

import { Schema, model } from "mongoose";

const guardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: guardianSchema, required: true },
    profileImage: { type: String, default: undefined },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
      required: true,
    },

    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Student = model("Student", studentSchema);
