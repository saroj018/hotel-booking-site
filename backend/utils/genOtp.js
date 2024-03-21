let otp = "";
export const getOtp = () => {
 
  while (otp.length < 6) {
    let num = Math.floor(Math.random() * 9);
    otp += num;
  }

  return otp;
};
