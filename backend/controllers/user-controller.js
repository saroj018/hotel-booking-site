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

const verifyUserValidation = z
  .object({
    firstname: z
      .string({
        required_error: "firstname is required",
      })
      .trim()
      .min(1),
    lastname: z
      .string({
        required_error: "lastname is required",
      })
      .trim()
      .min(1),
    address: z
      .string({
        required_error: "address is required",
      })
      .trim()
      .min(1),
    phone: z
      .number({
        required_error: "phone is required",
      })
      .min(1),
    email: z
      .string({
        required_error: "email is required",
      })
      .trim()
      .email()
      .min(1),
    cemail: z
      .string({
        required_error: "confirm email is required",
      })
      .trim()
      .email()
      .min(1),
    gender: z
      .string({
        required_error: "gender is required",
      })
      .trim()
      .min(1)
      .optional(),
    dob: z
      .string({
        required_error: "dob is required",
      })
      .trim()
      .min(1),
  })
  .refine((data) => data.email === data.cemail, {
    message: "email and confirm email must be same",
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
      return resp.json({ success: false, error: "User already exists" });
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
        .json({ success: true, token: token, message: "Signup Successfully" });
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
    if (!findUser) {
      return resp.json({ success: false, message: "User not Found" });
    }

    const comparePassword = await checkPassword(password, findUser.password);
    if (!comparePassword) {
      return resp.json({ success: false, message: "Incorrect Password" });
    }
    const token = genToken(email);
    return resp.json({
      success: true,
      user: findUser,
      message: "Login Successfully",
      token,
    });
  } catch (error) {
    return resp.json({ success: false, message: error.message });
  }
};

export const chagePassword = async (req, resp) => {
  try {
    const { oldpassword, newpassword, cpassword } = req.body;

    if (!oldpassword || !newpassword || !cpassword) {
      throw new Error("Please provide required password");
    }

    if (!(newpassword == cpassword)) {
      throw new Error("new password and confirm password must be same");
    }
    const id = req.user._id;

    const findPassword = await User.findOne({ _id: id }).select("password");
    console.log(findPassword.password);

    if (!findPassword) {
      throw new Error("User not found");
    }

    const comparePassword = await checkPassword(
      oldpassword,
      findPassword.password
    );
    console.log(comparePassword);

    if (!comparePassword) {
      throw new Error("Your Old password is incorrect");
    }
    const encryptPassword = await hashPassword(newpassword);

    const updatePassword = await User.findByIdAndUpdate(
      { _id: id },
      { password: encryptPassword }
    );

    if (!updatePassword) {
      throw new Error("Failed to update password");
    }

    return resp.json({
      success: true,
      message: "Password update successfully",
    });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const verifyUser = async (req, resp, next) => {
  try {
    const getOtp = req.body;
    if (getOtp.otp) {
      req.otp=getOtp.otp
     return next();
    }
    const data = verifyUserValidation.parse(req.body);

    if (data) {
      req.verifyUser = data;
      next();
    }
  } catch (error) {
    return resp.json({ success: false, error: error.format() });
  }
};
