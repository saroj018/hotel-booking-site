import express from "express";
import {
  chagePassword,
  loginUser,
  resetPassword,
  signupUser,
} from "../controllers/user-controller.js";
import passport from "passport";
import "../middleware/googlePassportAuth.js";
import { hashPassword } from "../utils/encrypt-password.js";
import { User } from "../model/user-model.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signupUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/updatepassword").post(chagePassword);
userRouter.route("/getotp").post(chagePassword);
userRouter.route("/resetpassword").post(resetPassword);
userRouter
  .route("/loginwithgoogle")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter
  .route("/loginwithgooglecallback")
  .get(
    passport.authenticate("google", {
      successRedirect: "http://localhost:5173/",
      failureRedirect: "http://localhost:5173/",
      session: false,
    })
  );

export default userRouter;
