import z from "zod";
import {
  deleteImageOnCloudinary,
  uploadImageOnCloudinary,
} from "../utils/cloudinary.js";
import { hotelDetailsModel, wishListModel } from "../model/hotel-details-model.js";
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
    adults: z.string(),
    childrens: z.string(),
    infants: z.string(),
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
    const result = await hotelDetailsModel.find();
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
    } = req.body;
    let hotelImage = req.files;

    offerServices = JSON.parse(offerServices);
    customerNumber = JSON.parse(customerNumber);
    locatedPlace = JSON.parse(locatedPlace);
    discount = JSON.parse(JSON.parse(discount));
    price = JSON.parse(price);
    roomType = JSON.parse(roomType);
    houseTitle = JSON.parse(houseTitle);
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
    const userId=req.user._id
    const findHotel=await hotelDetailsModel.find({uploadedBy:userId}).select('_id')
    const token=genToken({findHotel})
    return resp.json({
      success: true,
      message: "Hotel's details add successfully",
      hotelDetails: hotelDataOnDb,
      token
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

    if (!hotelDetails) {
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

    const result = await hotelDetailsModel
      .findOne({ _id: id })
      .populate({
        path:'uploadedBy',
        select:"fullname"
      });
      const reservedDate=await hotelReserveModel.find({hotel:id}).select('dateList')
      if(!reservedDate){
        return resp.json({success:false,message:"reserve date is not found"})
      }
      
    if (!result) {
      resp.json({ success: false, message: "Details not found" });
    }
  

    return resp.json({
      success: true,
      message: "Detail find Successfully",
      data: result,
      dates:reservedDate
    });
  } catch (error) {
    resp.json({ success: false, message: "Error: " + error.message });
  }
};
