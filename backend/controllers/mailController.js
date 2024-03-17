import { User } from "../model/user-model.js";
import { userVerifyModel } from "../model/user-verify-model.js";
import { createTransport } from "../utils/email-config.js";
import { getOtp } from "../utils/genOtp.js";

export const sendMail = async (req, resp) => {
  try {
    const otpNumber = getOtp();
    const finalOtp = req.otp;

    if (finalOtp) {
      if (finalOtp == otpNumber) {
        let user = await userVerifyModel.find({ logindetails: req.user._id });
        if (user) {
          return resp.json({ success: true, message: "user verified" });
        } else {
          await userVerifyModel;
        }
      } else {
        let user = await userVerifyModel.find({ logindetails: req.user._id });
        if (user) {
          await userVerifyModel.deleteOne({ _id: user._id });
        }
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
      email,
      cemail,
      gender,
      dob,
      phone,
    });

    let user = await User.find({ _id: req.user._id });
    let result = await createTransport.sendMail({
      from: "",
      to: email,
      subject: "Account verification",
      html: ` <h1 id="name"></h1>
      <p>Hi,${user[0].fullname}</p>
      <p>
        Thank you for choosing us. Use the following OTP to complete
        your verify process. OTP is valid for 2 minutes
      </p>
      <h1>${otpNumber}</h1>
      <p>Regards,</p>
      <p>Airbnb-Clone</p>`,
    });
    return resp.json({ success: true, message: result });
  } catch (error) {
    console.log(error.message);
    return resp.json({ success: false, error: error.message });
  }
};
