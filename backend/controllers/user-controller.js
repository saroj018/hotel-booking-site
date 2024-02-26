import { z } from "zod";
import { genToken } from "../utils/token.js";
import { checkPassword, hashPassword } from "../utils/encrypt-password.js";
import { User } from "../model/user-model.js";

const userValidation = z.object({
  fullname: z
    .string({
      required_error: "Fullname is required",
    })
    .min(1)
    .optional(),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1)
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1)
    .min(4, { message: "Password must be minimum 4 character" }),
});

//Signup User

export const signupUser = async (req, resp) => {
  const { fullname, password, email } = req.body;
  try {
    const result = userValidation.safeParse({ fullname, password, email });
    if (!result.success) {
      return resp.json({ success: false, message: result.error.format() });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return resp.json({ success: false, message: "User already exists" });
    }

    const encryptPassword = await hashPassword(password);

    const dbResponse = await User.create({
      fullname,
      email,
      password: encryptPassword,
    });
    if (dbResponse) {
      const token = genToken(email);
    //   const expirationTime = new Date();
    //   expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000);
    //   resp.cookie("token", token, {
    //     sameSite: "none",
    //     expires: expirationTime,
    //     secure: true,
    //   });
      return resp
        .status(200)
        .json({ success: true,token:token, message: "Signup Successfully" });
    }
  } catch (error) {
    return resp.json({ success: false, message: error.message });
  }
};

//Login User

export const loginUser = async (req, resp) => {
  const { password, email } = req.body;

  try {
    const result = userValidation.safeParse({ email, password });

    if (!result.success) {
      return resp.json({ success: false, message: result.error.format() });
    }
    const findUser = await User.findOne({ email });
    console.log(findUser);
    if (!findUser) {
      return resp.json({ success: false, message: "User not Found" });
    }

    const comparePassword = await checkPassword(password, findUser.password);
    if (!comparePassword) {
      return resp.json({ success: false, message: "Incorrect Password" });
    }
    const token = genToken(email);
    return resp.json({ success: true, message: "Login Successfully" ,token});
  } catch (error) {
    return resp.json({ success: false, message: error.message });
  }
};
