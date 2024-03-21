import { createTransport } from "./email-config.js";

export const emailSender = async (email,firstname,newOtp) => {
  let result = await createTransport.sendMail({
    from: "",
    to: email,
    subject: "Account verification",
    html: ` <h1 id="name"></h1>
        <p>Hi,${firstname}</p>
        <p>
          Thank you for choosing us. Use the following OTP to complete
          your verify process. OTP is valid for 2 minutes
        </p>
        <h1>${newOtp}</h1>
        <p>Regards,</p>
        <p>Airbnb-Clone</p>`,
  });
  return result;
};
