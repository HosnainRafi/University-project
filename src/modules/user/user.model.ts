// src/modules/user/user.model.ts

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../app/config";

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// ✅ Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const saltRounds = Number(config.salt_rounds);
  this.password = await bcrypt.hash(this.password, saltRounds);

  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<IUser>("User", userSchema);
