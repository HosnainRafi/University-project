import { UserModel } from "./user.model";
import { IUser, IOrder } from "./user.interface";

const formatNotFound = {
  success: false,
  message: "User not found",
  error: {
    code: 404,
    description: "User not found!",
  },
};

export const createUserService = async (userData: IUser) => {
  const createdUser = await UserModel.create(userData);
  return createdUser.toObject();
};

export const getAllUsersService = async () => {
  return UserModel.find(
    { isDeleted: false },
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
      _id: 0,
    }
  );
};

export const getSingleUserService = async (userId: number) => {
  const user = await UserModel.findOne(
    { userId, isDeleted: false },
    { password: 0, __v: 0 }
  );
  if (!user) throw formatNotFound;
  return user;
};

export const updateUserService = async (
  userId: number,
  updateData: Partial<IUser>
) => {
  const user = await UserModel.findOneAndUpdate({ userId }, updateData, {
    new: true,
    projection: { password: 0, __v: 0 },
  });
  if (!user) throw formatNotFound;
  return user;
};

export const deleteUserService = async (userId: number) => {
  const user = await UserModel.findOne({ userId });
  if (!user) throw formatNotFound;

  user.isDeleted = true;
  await user.save();
};

export const addOrderToUserService = async (userId: number, order: IOrder) => {
  const user = await UserModel.findOne({ userId });
  if (!user) throw formatNotFound;

  user.orders = user.orders || [];
  user.orders.push(order);
  await user.save();
};

export const getUserOrdersService = async (userId: number) => {
  const user = await UserModel.findOne({ userId });
  if (!user) throw formatNotFound;
  return user.orders || [];
};

export const calculateTotalOrderPriceService = async (userId: number) => {
  const user = await UserModel.findOne({ userId });
  if (!user) throw formatNotFound;

  const totalPrice = (user.orders || []).reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );

  return totalPrice;
};
