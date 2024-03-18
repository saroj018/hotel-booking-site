import { User } from "../model/user-model.js";
import { userVerifyModel } from "../model/user-verify-model.js";
import { createTransport } from "../utils/email-config.js";
import { getOtp } from "../utils/genOtp.js";


let otpCollection =new Map()
export const sendMail = async (req, resp) => {
  try {
    if (!req.otp) {
       let otpNumber=getOtp(true);
       otpCollection.set('otpNum',otpNumber)
      setTimeout(() => {
        otpCollection.set('otpNum',null)
        console.log('time out');
      }, 230000);
    }
    console.log(otpCollection.get('otpNum'));
    const finalOtp = req.otp;
    let { _id } = req.user;
    if (finalOtp) {
      if (finalOtp == otpCollection.get('otpNum')) {
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
      <h1>${otpCollection.get('otpNum')}</h1>
      <p>Regards,</p>
      <p>Airbnb-Clone</p>`,
    });
    return resp.json({ success: true, message: result });
  } catch (error) {
    console.log(error.message);
    return resp.json({ success: false, error: error.message });
  }
};
