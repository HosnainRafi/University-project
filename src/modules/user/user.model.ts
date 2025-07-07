import mongoose, { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import config from "../../app/config";
import bcrypt from "bcrypt";

const orderSchema = new Schema({
  productName: String,
  price: Number,
  quantity: Number,
});

const fullNameSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const addressSchema = new Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new Schema<IUser>(
  {
    userId: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    fullName: fullNameSchema,
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    isActive: { type: Boolean, required: true },
    hobbies: [{ type: String }],
    address: addressSchema,
    orders: [orderSchema],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.password;
        return ret;
      },
    },
  }
);

// userSchema.virtual("FullName").get(function () {
//   return `${this.fullName.firstName} ${this.fullName.lastName}`;
// });

userSchema.pre("save", async function (this: IUser & Document) {
  const saltRounds = Number(config.salt_rounds);
  this.password = await bcrypt.hash(this.password, saltRounds);
});

userSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

userSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const UserModel = model<IUser>("User", userSchema);
