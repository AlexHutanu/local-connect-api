import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel, IUser } from "../models/user.model";

interface ILoginResult {
  status: number;
  message: string;
  token?: string;
  user: IUser | any;
}

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET environment variable");

export const registerUser = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return {
      status: 400,
      message: "User already exists",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserModel.create({
    email,
    firstName,
    lastName,
    password: hashedPassword,
  });

  return {
    status: 201,
    message: "User registered successfully",
    user: newUser,
  };
};

export const loginUser = async (
  email: string,
  password: string
): Promise<ILoginResult> => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return {
      status: 400,
      message: "Invalid email or password",
      user: null,
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return {
      status: 400,
      message: "Invalid email or password",
      user: null,
    };
  }

  const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    status: 200,
    message: "Login successful",
    token: token,
    user: user,
  };
};
