import { hotelDetailsModel } from "../model/hotel-details-model";

export const ownerAuth = async (req, resp, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("Token is required");
    }
    const id = req.user._id;
    const hotels = await hotelDetailsModel.find({ uploadedBy: id });
  } catch (error) {
    return resp.jsong({ success: false, error: error.message });
  }
};
