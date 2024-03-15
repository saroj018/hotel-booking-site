import { z } from "zod";
import { hotelReserveModel } from "../model/hotel-reserve-model.js";
import { hotelDetailsModel } from "../model/hotel-details-model.js";
import { genToken } from "../utils/token.js";

const reserveValidator = z.object({
  checkIn: z
    .string({
      required_error: "Date is required",
    })
    .trim()
    .min(3, { message: "Invalid date" }),
  checkOut: z
    .string({
      required_error: "Date is required",
    })
    .trim()
    .min(3, { message: "Date is required" }),
  Adults: z.number({
    required_error: "Adults is required",
  }),
  Children: z.number({
    required_error: "Children is required",
  }),
  Infants: z.number({
    required_error: "Infants is required",
  }),
  payMethod: z
    .string({
      required_error: "payMethod is required",
    })
    .trim()
    .min(1, { message: "All field are required" }),
  payVia: z
    .string({
      required_error: "payVia is required",
    })
    .trim()
    .min(1, { message: "All field are required" }),
});

export const hotelReserveController = async (req, resp) => {
  try {
    const {
      checkIn,
      checkOut,
      Adults,
      Children,
      Infants,
      payMethod,
      payVia,
      hotel,
      dateList
    } = req.body;

    console.log(dateList);
    reserveValidator.parse({
      checkIn,
      checkOut,
      Adults,
      Children,
      Infants,
      payMethod,
      payVia,
    });

    const reservedBy = req.user._id;

    const currentDate = new Date();
    
    const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: true })
    
    const reserveDate=currentDate.toISOString().slice(0,10)
    const reserveTime=currentTime

    const reserveType=await hotelDetailsModel.findOne({_id:hotel}).select('bookingType')
    console.log(reserveType);
    const dbResult = await hotelReserveModel.create({
      checkIn,
      checkOut,
      Adults,
      Children,
      Infants,
      payMethod,
      payVia,
      reservedBy,
      hotel,
      reserveDate,
      reserveTime,
      dateList,
      reserveType:reserveType.bookingType
    });

    if (!dbResult) {
      throw new Error("Reserve data not store on database");
    }

    return resp.json({
      success: true,
      message: "Reserved successfully",
      details: dbResult,
    });
  } catch (error) {
    console.log(error.message);
    return resp.json({ success: false, error: error.message });
  }
};

export const getReservedHotelDetails = async (req, resp) => {
  try {
    const { id } = req.user;
    console.log(id);
    const result = await hotelReserveModel.find({ reservedBy: id }).populate([
      { path: "hotel" },
      { path: "reservedBy", select: "-password" },
    ]);

    if (!result) {
      throw new Error("You don't have any reserved");
    }
    console.log(result);
    return resp.json({ success: true, data: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const totalReservedHotel = async (req, resp) => {
  try {
    const myHotel = await hotelDetailsModel
      .find({ uploadedBy: req.user._id })
      .select("_id");
    if (!myHotel) {
      throw new Error("You haven't any hotel register");
    }
    const myReserved = await hotelReserveModel.find({
      hotel: { $in: myHotel },
    }).populate([
      {path:'reservedBy',select:'fullname'},
      {path:'hotel',select:-'_id'}
    ]);

    if (!myReserved) {
      throw new Error("You haven't any reserved hotel");
    }


    return resp.json({ success: true, data: myReserved });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};



export const approveReserve=async(req,resp)=>{
  try {
    const {id}=req.body

  if(!id){
    throw new Error("Please provide id")
  }

  
  const result=await hotelReserveModel.findByIdAndUpdate({_id:id},{reserveType:'instant'},{new:true})
  console.log('>>>>',result);


  return resp.json({success:true,updated:result})
  } catch (error) {
    console.log(error.message);
  }
}

