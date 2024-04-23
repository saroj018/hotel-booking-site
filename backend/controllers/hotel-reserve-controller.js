import { z } from "zod";
import { hotelReserveModel } from "../model/hotel-reserve-model.js";
import { hotelDetailsModel } from "../model/hotel-details-model.js";
import { genToken } from "../utils/token.js";
import request from "request";
import axios from "axios";
import fetch from "node-fetch";
import { purchaseOrderModel } from "../model/purchase-order-model.js";
import { paymentModel } from "../model/payment-model.js";
import { nightCalculator } from "../../frontend/src/component/utlils/nightCalculator.js";

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
      dateList,
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

    const currentTime = currentDate.toLocaleTimeString("en-US", {
      hour12: true,
    });

    const reserveDate = currentDate.toISOString().slice(0, 10);
    const reserveTime = currentTime;

    const reserveType = await hotelDetailsModel
      .findOne({ _id: hotel })
      .select("bookingType");
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
      reserveType: reserveType.bookingType,
      paid: false,
    });

    if (!dbResult) {
      throw new Error("Reserve data not store on database");
    }

    return resp.json({
      success: true,
      // message: "Reserved successfully",
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
    const result = await hotelReserveModel
      .find({ reservedBy: id, paid: true })
      .populate([
        { path: "hotel" },
        { path: "reservedBy", select: "-password" },
      ]);

    if (!result) {
      throw new Error("You don't have any reserved");
    }
    
    await hotelReserveModel.findOneAndDelete({paid:false})

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
    const myReserved = await hotelReserveModel
      .find({
        hotel: { $in: myHotel },
      })
      .populate([
        { path: "reservedBy", select: "fullname" },
        { path: "hotel", select: -"_id" },
      ]);

    if (!myReserved) {
      throw new Error("You haven't any reserved hotel");
    }

    return resp.json({ success: true, data: myReserved });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const approveReserve = async (req, resp) => {
  try {
    const { id } = req.body;

    if (!id) {
      throw new Error("Please provide id");
    }

    const result = await hotelReserveModel.findByIdAndUpdate(
      { _id: id },
      { reserveType: "instant" },
      { new: true }
    );

    return resp.json({ success: true, updated: result });
  } catch (error) {
    console.log(error.message);
  }
};

export const reserveCancel = async (req, resp) => {
  try {
    const { id } = req.params;
    console.log("id>>>>", id);

    if (!id) {
      throw new Error("Please provide id");
    }

    const result = await hotelReserveModel.findByIdAndDelete(id);

    if (!result) {
      throw new Error("unabale to cancel reservation");
    }

    return resp.json({ success: true, message: "Reserve cancel successfully" });
  } catch (err) {
    resp.json({ success: false, error: err.message });
  }
};

export const paymentController = async (req, resp) => {
  try {
    const reserveInfo = req.body;
    console.log("sora>>>>>>", reserveInfo);

    const dbQuery = await purchaseOrderModel.create({
      itemName: reserveInfo.hotel,
      price: reserveInfo.price,
      reserveId: reserveInfo.reserveId,
    });
    if (!dbQuery) {
      throw new Error("dbQuery failed");
    }

    const header = {
      Authorization: "Key 0c05e393ff924ec2827d3fbe33f013ad",
      "Content-Type": "application/json",
    };

    const formData = {
      return_url: "http://localhost:4000/api/reserve/payment/callback",
      website_url: "http://localhost:4000",
      amount: 5000,
      purchase_order_id: dbQuery._id,
      purchase_order_name: dbQuery.reserveId,
    };
    console.log(formData);

    const response = await fetch(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      {
        method: "POST",
        headers: header,
        body: JSON.stringify(formData),
      }
    );
    const result = await response.json();
    return resp.json({ success: true, data: result, sora: "kora" });
  } catch (err) {
    console.log(err.stack);
    console.log({ success: false, error: err.message });
    resp.redirect('http://localhost:5173/payment-error')
  }
};

export const paymentCallbackResponse = async (req, resp) => {
  try {
    const {
      pidx,
      transaction_id,
      amount,
      status,
      purchase_order_id,
      mobile,
      total_amount,
      purchase_order_name
    } = req.query;
    const header = {
      Authorization: "Key 0c05e393ff924ec2827d3fbe33f013ad",
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://a.khalti.com/api/v2/epayment/lookup/",
      {
        method: "POST",
        headers: header,
        body: JSON.stringify({ pidx }),
      }
    );
    const result = await response.json();

    if (result) {
      const findReserve = await hotelReserveModel.findOne({
        _id: purchase_order_name,
      });

      if (!findReserve) {
        throw new Error("reserve not found");
      }

      console.log('>>>>>>>>payment success');
      const paymentOnDb = await paymentModel.create({
        payment_id: pidx,
        purchase_order_id,
        amount,
        status,
        mobile,
        transaction_id,
        total_amount,
      });
      
      if(!paymentOnDb){
        throw new Error("faild to dbQuery on payment")
      }
      findReserve.paid = true;
      await findReserve.save();
      resp.redirect(`http://localhost:5173/mytrips`);
    }
  } catch (err) {
    console.log({ success: false, error: err.message });
    resp.redirect('http://localhost:5173/payment-error')
  }
};


export const chartInfo=async(req,resp)=>{
  try {
    const user=req.user
    const hotelInfo=await hotelDetailsModel.find({uploadedBy:user._id})
    let hotelArr=[]
    for(let i=0;i<hotelInfo.length;i++){
      hotelArr.push(hotelInfo[i]._id)
    }
    const reserveInfo=await hotelReserveModel.find({hotel:{$in:hotelArr}}).populate('hotel')
  


    if(!reserveInfo){
      throw new Error("not found reserve")
    }

    return resp.json({success:true,details:reserveInfo})
  } catch (err) {
    return resp.json({success:false,error:err.message})
  }
}