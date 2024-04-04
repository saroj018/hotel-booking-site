import { User } from "../model/user-model.js";
import { userVerifyModel } from "../model/user-verify-model.js";
import { createTransport } from "../utils/email-config.js";
import { emailSender } from "../utils/userVerified-email-sender.js";
import { getOtp } from "../utils/genOtp.js";
import { passwordResetEmailSender } from "../utils/passwordChange-email-sennder.js";

let otpCollection = new Map();
export const sendMail = async (req, resp) => {
  try {
    if (!req.otp) {
      let otpNumber = getOtp();
      otpCollection.set("otpNum", otpNumber);
      setTimeout(() => {
        otpCollection.set("otpNum", null);
      }, 230000);
    }
    const finalOtp = req.otp;
    let { _id } = req.user;
    if (finalOtp) {
      if (finalOtp == otpCollection.get("otpNum")) {
        let user = await userVerifyModel.updateOne(
          { logindetails: _id },
          { $set: { verified: true } }
        );
        console.log(user);
        return resp.json({ success: true, message: "verified successfully" });
      } else {
        throw new Error("otp not matched");
      }
    }
    const { email, cemail, firstname, lastname, phone, address, gender, dob } =
      req.verifyUser;

    await userVerifyModel.create({
      email,
      firstname,
      lastname,
      address,
      cemail,
      gender,
      dob,
      phone,
      verified: false,
      logindetails: _id,
    });

    const newOtp = otpCollection.get("otpNum");
    let user = await User.find({ _id: req.user._id });
    const fullname = user[0].fullname;
    let result = emailSender(email, fullname, newOtp);
    return resp.json({ success: true, message: result });
  } catch (error) {
    console.log(error.message);
    return resp.json({ success: false, error: error.message });
  }
};

export const passwordResetOtp = async (req, resp) => {
  try {
    const otp = req.body;
    if (!otp?.resetOtp) {
      let otpNum = getOtp();
      otpCollection.set("resetPassword", otpNum);
      setTimeout(() => {
        otpCollection.set("resetPassword", null);
      }, 230000);
      const user = await User.findOne({
        email: otp.email,
      });
      console.log(user);
      const result = await passwordResetEmailSender(
        user.email,
        user.fullname,
        otpCollection.get("resetPassword")
      );
      if (!result) {
        throw new Error("Failed to send otp");
      }
    }

    if (otp.resetOtp) {
      if (otpCollection.get("resetPassword") == otp.resetOtp) {
        return resp.json({ success: true });
      } else {
        throw new Error("Invalid otp");
      }
    }
    return resp.json({ success: true });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};
