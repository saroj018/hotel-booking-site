import { hotelDetailsModel } from "../model/hotel-details-model.js";
import { reviewModel } from "../model/hotel-review-model.js";

export const hotelReview = async (req, resp) => {
  try {
    console.log('hit');
    const user=req.user._id
    console.log(user);
    const { rating, reviewMessage,hotelId } = req.body;

    const result = await reviewModel.create({
      rating,
      reviewMessage,
      hotelId,
      user
    });

    if (!result) {
      throw new Error("failed to save review in db");
    }

    const findHotel=await hotelDetailsModel.find({_id:hotelId})
    findHotel.rating=rating
    await findHotel.save()

    return resp.json({
      success: true,
      message: "thanks for review our service",
    });
  } catch (err) {
    return resp.json({ success: false, error: err.message });
  }
};


export const getHotelReview=async(req,resp)=>{
  try {
    const{id}=req.params
    console.log(id);

    if(!id){
      throw new Error("please provide id first")
    }

    const result=await reviewModel.find({hotelId:id}).populate({
      path:'user',
      select:'-password -email'
    })
    console.log(result);

    return resp.json({review:result})
  } catch (err) {
    return resp.json({success:false,error:err.message})
  }
}