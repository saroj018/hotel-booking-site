import z from "zod";
import {
  deleteImageOnCloudinary,
  uploadImageOnCloudinary,
} from "../utils/cloudinary.js";
import {
  hotelDetailsModel,
  wishListModel,
} from "../model/hotel-details-model.js";
import { User } from "../model/user-model.js";
import { genToken } from "../utils/token.js";
import { hotelReserveModel } from "../model/hotel-reserve-model.js";




const hotelDetailsValidation = z.object({
  homeType: z
    .string({
      required_error: "HomeType is required",
    })
    .trim(),
  roomType: z
    .string({
      required_error: "RoomType is required",
    })
    .trim(),
  houseTitle: z
    .string({
      required_error: "HouseTitle is required",
    })
    .trim()
    .min(10)
    .max(100),
  aboutHome: z
    .string({
      required_error: "AboutHome is required",
    })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .trim()
    .min(500)
    .max(2000),
  bookingType: z
    .string({
      required_error: "BookingType is required",
    })
    .trim(),
  price: z.object({
    adults: z.number(),
    childrens: z.number(),
    infants: z.number(),
  }),
  discount: z.number({
    required_error: "Discount is required",
  }),
  customerNumber: z.object({
    bed: z.number(),
    guest: z.number(),
    bathroom: z.number(),
  }),
  offerServices: z.array(z.string().trim()),
  locatedPlace: z.object({
    lat: z.number(),
    lan: z.number(),
  }),
  owner: z.string().trim().min(1).optional(),
});

export const getAllHotelController = async (req, resp) => {
  try {
    const { limitData,skipData } = req.query;

    const result = await hotelDetailsModel.find().skip(skipData).limit(limitData);
    if (!result) {
      throw new Error("Hotel not found");
    }
    return resp.json({ success: true, details: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const hotelDetailsController = async (req, resp) => {
  try {
    let hotelInfo = JSON.parse(req.body.details);
    console.log('info', req.body.details);
    let {
      homeType,
      roomType,
      houseTitle,
      aboutHome,
      offerServices,
      description,
      customerNumber,
      bookingType,
      price,
      discount,
      locatedPlace,
    } = hotelInfo;
    let hotelImage = req.files;

    const validateDetails = hotelDetailsValidation.safeParse({
      homeType,
      roomType,
      houseTitle,
      aboutHome,
      offerServices,
      description,
      customerNumber,
      bookingType,
      price,
      discount,
      locatedPlace,
    });

    if (validateDetails.error) {
      return resp.json({ error: validateDetails.error.format() });
    }

   

    const resultOfUploadedImage = await uploadImageOnCloudinary(
      hotelImage,
      "hotelDetails"
    );

    if (!resultOfUploadedImage || resultOfUploadedImage.length === 0) {
      throw new Error("Image not uploaded");
    }
    const idOfImage = resultOfUploadedImage.map((item) => ({
      url: item.url,
      public_id: item.public_id,
    }));
    const uploadedBy = req.user._id;
    // console.log("price" >> price);

    const hotelDataOnDb = await hotelDetailsModel.create({
      uploadedBy,
      idOfImage,
      homeType,
      roomType,
      houseTitle,
      aboutHome,
      offerServices,
      description,
      customerNumber,
      bookingType,
      price,
      discount,
      locatedPlace,
    });
    if (!hotelDataOnDb) {
      return resp.json({
        success: false,
        message: "Details are not store in db",
      });
    }
    const userId = req.user._id;
    const findHotel = await hotelDetailsModel
      .find({ uploadedBy: userId })
      .select("_id");
    const token = genToken({ findHotel });
    return resp.json({
      success: true,
      message: "Hotel's details add successfully",
      hotelDetails: hotelDataOnDb,
      token,
    });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const getHotelDetailsController = async (req, resp) => {
  try {
    const hotelDetails = await hotelDetailsModel.find({
      uploadedBy: req.user._id,
    });

    if (!hotelDetails || hotelDetails.length < 1) {
      console.log(hotelDetails);
      return resp.json({
        success: false,
        message: "There is no hotel register by this user",
      });
    }

    return resp.json({ success: true, detals: hotelDetails });
  } catch (error) {
    resp.json({ success: false, message: "Error: " + error.message });
  }
};

export const deleteHotelController = async (req, resp) => {
  let { id } = req.body;
  try {
    if (!id) {
      return resp.json({ success: false, message: "Please provide id" });
    }
    const findDetails = await hotelDetailsModel.find({ _id: { $in: id } });

    const deleteImage = await deleteImageOnCloudinary(findDetails);
    if (!deleteImage) {
      return resp.json({
        success: false,
        message: "Image is not deleted from cloudinary",
      });
    }
    const result = await hotelDetailsModel.deleteMany({ _id: { $in: id } });

    if (result.deletedCount === 0) {
      return resp.json({ success: false, message: "Details not deleted" });
    }

    if (!result) {
      return resp.json({ success: false, message: "Details not found" });
    }

    return resp.json({
      success: true,
      message: "Deleted Successfully",
      details: result,
    });
  } catch (error) {
    return resp.json({ success: false, message: "Error: " + error.message });
  }
};

export const getSingleDetails = async (req, resp) => {
  try {
    const { id } = req.params;
    if (!id) {
      return resp.json({ success: false, message: "Please provide id first" });
    }

    const result = await hotelDetailsModel.findOne({ _id: id }).populate({
      path: "uploadedBy",
      select: "fullname",
    });
    const reservedDate = await hotelReserveModel
      .find({ hotel: id })
      .select("dateList");
    if (!reservedDate) {
      return resp.json({
        success: false,
        message: "reserve date is not found",
      });
    }

    if (!result) {
      resp.json({ success: false, message: "Details not found" });
    }

    return resp.json({
      success: true,
      message: "Detail find Successfully",
      data: result,
      dates: reservedDate,
    });
  } catch (error) {
    resp.json({ success: false, message: "Error: " + error.message });
  }
};

export const getDetailOfParticularDate = async (req, resp) => {
  try {
    const user = req.user._id;
    const date = req.body.date;
    const hotelId = req.body.hotelId;

    const result = await hotelReserveModel
      .find({ hotel: hotelId })
      .populate("reservedBy hotel");
    const filterResult = result.filter((ele) => {
      return ele.dateList.includes(date);
    });
    console.log(filterResult);

    if (!result) {
      throw new Error("Hotel not found");
    }

    return resp.json({ success: true, hotel: filterResult });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const filterViaHouseType = async (req, resp) => {
  try {
    const { type } = req.body;
    console.log(type);

    if (!type) {
      throw new Error("Please provide type");
    }
    if (type === "all") {
      const result = await hotelDetailsModel.find();
      if (!result) {
        throw new Error("Not Found");
      }
      return resp.json({ success: true, data: result });
    }

    const result = await hotelDetailsModel.find({ homeType: type });
    if (!result) {
      throw new Error("Not Found");
    }
    console.log(result);

    return resp.json({ success: true, data: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const filterHotels = async (req, resp) => {
  try {
    const { filterParams } = req.body;
    console.log("filter>>>>>>>>", filterParams);

    if (!filterHotels) {
      throw new Error("Please provide filterparams");
    }

    const result = await hotelDetailsModel.find({
      roomType: filterParams.place,
      aboutHome: filterParams.about,
      "customerNumber.bed": filterParams.BRB.Beds,
      "customerNumber.bathroom": filterParams.BRB.Bathrooms,
      "customerNumber.bedroom": filterParams.BRB.Rooms,
      "price.adults": {
        $gte: filterParams.price.min,
        $lte: filterParams.price.max,
      },
    });

    if (!result) {
      throw new Error("Hotel not found");
    }
    return resp.json({ success: true, data: result });
  } catch (error) {
    return resp.json({ success: false, error: error.message });
  }
};

export const searchHotels = async (req, resp) => {
  try {
    const { payload } = req.query;
    if (payload == "") {
      let result = await hotelDetailsModel.find();
      return resp.json({ success: true, data: result });
    }

    const regex = new RegExp(payload, "i");
    let result = await hotelDetailsModel.find({ aboutHome: regex });

    if (!result) {
      throw new Error("hotel not found");
    }

    return resp.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
    resp.json({ success: false, error: err.message });
  }
};

