let otp = "";
export const getOtp = (param) => {
  if (param) {
    while (otp.length < 6) {
      let num = Math.floor(Math.random() * 9);
      otp += num;
    }

    return otp;
  } else {
    return null;
  }
};
