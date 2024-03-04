import { z } from "zod";
import { hotelReserveModel } from "../model/hotel-reserve-model.js";

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
    .min(1),
  payVia: z
    .string({
      required_error: "payVia is required",
    })
    .trim()
    .min(1),
});

export const hotelReserveController = async (req, resp) => {
  try {
    const { checkIn, checkOut, Adults, Children, Infants, payMethod, payVia } =
      req.body;

    const validate = reserveValidator.parse({
      checkIn,
      checkOut,
      Adults,
      Children,
      Infants,
      payMethod,
      payVia,
    });
    if (validate.error) {
      return resp.json({ success: false, error: validate.error.format() });
    }
    const reservedBy = req.user._id;
    const dbResult = await hotelReserveModel.create({
      checkIn,
      checkOut,
      Adults,
      Children,
      Infants,
      payMethod,
      payVia,
      reservedBy,
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
