import { hotelDetailsModel, wishListModel } from "../model/hotel-details-model.js";

export const addWishlist = async (req, resp) => {
  try {
    const userId = req.user._id;
    console.log('id>>',userId);
    const hotelId = req.body.id;

    if (!userId && !hotelId) {
      throw new Error("Please provide id");
    }

    const result = await wishListModel.create({ addedBy: userId, hotel: hotelId });
    if (!result) {
      throw new Error("Data not uploded on DB");
    }

    return resp.json({ success: true, message: "Add on wishlist" });
  } catch (error) {
    console.log('error:',error.message);
    return resp.json({ success: false, error: error.message });
  }
};

export const getWishlist = async (req, resp) => {
  try {
    const result = await wishListModel.find({ addedBy: req.user._id })
    const result1 = await hotelDetailsModel.find({_id:result[0].hotel})
    console.log(result1);
    if (!result) {
      throw new Error("Wishlist is not found");
    }

    return resp.json({ success: true, wishlist: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};


export const removeFromWishlist=async(req,resp)=>{
    try {
        const hotelId=req.body.id

    if(!id){
        throw new Error("Please provide HotelId")
    }

    const result=await wishListModel.findByIdAndDelete({_id:hotelId})

    if(!result){
        throw new Error("Hotel not removed")
    }

    return resp.json({success:true,message:'Removed successfully'})
    } catch (error) {
        return resp.json({success:false,error:error.message})
    }
}
