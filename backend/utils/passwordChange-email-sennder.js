import { createTransport } from "./email-config.js";

export const passwordResetEmailSender = async (email,firstname,newOtp) => {
  let result = await createTransport.sendMail({
    from: "",
    to: email,
    subject: "Password reset",
    html: ` <h1 id="name"></h1>
        <p>Hi,${firstname}</p>
        <p>
          Thank you for choosing us. Use the following OTP to reset your password.This otp is valid for 2 min
        </p>
        <h1>${newOtp}</h1>
        <p>Regards,</p>
        <p>Airbnb-Clone</p>`,
  });
  return result;
};
