import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await registerUser(email, firstName, lastName, password);
    return res
      .status(201)
      .json({ message: "User registered successfully", user: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering user", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const { user, token } = await loginUser(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res
      .status(200)
      .json({ message: "Login successful", user: user, token: token });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error: error });
  }
};
