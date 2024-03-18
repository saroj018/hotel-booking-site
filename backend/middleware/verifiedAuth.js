import { userVerifyModel } from "../model/user-verify-model.js";

export const checkVerifyUser = async (req, resp, next) => {
  try {
    const user = await userVerifyModel.findOne({ logindetails: req.user._id });
    if (user) {
      return next();
    }

    throw new Error("please verified first");
  } catch (error) {
    return resp.json({ success: false, errmsg: error.message });
  }
};
