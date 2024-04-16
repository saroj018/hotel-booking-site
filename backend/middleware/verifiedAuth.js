import { userVerifyModel } from "../model/user-verify-model.js";

export const checkVerifyUser = async (req, resp, next) => {
  try {
    const user = await userVerifyModel.findOne({ logindetails: req.user._id });
    
    if (user && user.verified==true) {
      return next();
    }
    else{
      return resp.json({success:false,verify:true,error:'User not found'})
    }

  } catch (error) {
    return resp.json({ success: false, errmsg: error.message });
  }
};
