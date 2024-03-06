import { User } from "../model/user-model.js";
import { verifyToken } from "../utils/token.js";

export const authentication = async (req, resp, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
     throw new Error("Pleas login first")
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return resp.json({ success: false, message: "Invalid Token" });
    }

    const user = await User.findOne({ email: tokenPayload });
    if (!user) {
      return resp.json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};
