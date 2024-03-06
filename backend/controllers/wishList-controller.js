import {
  hotelDetailsModel,
  wishListModel,
} from "../model/hotel-details-model.js";

export const addWishlist = async (req, resp) => {
  try {
    const userId = req.user._id;
    const hotelId = req.body.ids;

    if (!userId && !hotelId) {
      throw new Error("Please provide id");
    }
    const findOnWishlist = await wishListModel.find({ addedBy: userId });

    let check = findOnWishlist.find((ele) => ele.hotel.toString() === hotelId);
    console.log('sososo',findOnWishlist._id);
    
    if (check) {
      await wishListModel.findByIdAndDelete({ _id: check._id });
      return resp.json({ success: false, error: "Removed from wishlist" });
    } else {
      const result = await wishListModel.create({
        addedBy: userId,
        hotel: hotelId,
      });
      if (!result) {
        throw new Error("Data not uploded on DB");
      }

      return resp.json({ success: true, message: "Add on wishlist" });
    }
  } catch (error) {
    console.log("error:", error.message);
    return resp.json({ success: false, error: error.message });
  }
};

export const getWishlist = async (req, resp) => {
  try {
    const result = await wishListModel
      .find({ addedBy: req.user._id })
      .populate("hotel");
    if (!result) {
      throw new Error("Wishlist is not found");
    }

    return resp.json({ success: true, wishlist: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const removeFromWishlist = async (req, resp) => {
  try {
    const hotelId = req.body.id;

    if (!hotelId) {
      throw new Error("Please provide HotelId");
    }

    const result = await wishListModel.findByIdAndDelete({ _id: hotelId });
    console.log(result);

    if (!result) {
      throw new Error("Hotel not exits on wishlist");
    }

    return resp.json({ success: false, error: "Removed successfully" });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};
