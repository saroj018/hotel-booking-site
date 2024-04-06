import express from "express";
import {
  deleteHotelController,
  filterHotels,
  filterViaHouseType,
  getAllHotelController,
  getDetailOfParticularDate,
  getHotelDetailsController,
  getSingleDetails,
  hotelDetailsController,
  searchHotels,
} from "../controllers/hotel-details-controller.js";
import multer from "multer";
import { authentication } from "../middleware/auth.js";
import { checkVerifyUser } from "../middleware/verifiedAuth.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname.split(".")[0] + "-" + uniqueSuffix);
  },
});

const filterFile=(req,file,cb)=>{
  if(file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/webp'){
    cb(null,true)
  }else{
    cb(new Error("Image must be jpg/jpeg/webp"),false)
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  fileFilter: filterFile,
});

const hotelDetailRoute = express.Router();

hotelDetailRoute
  .route("/addhoteldetails")
  .post(
    authentication,
    checkVerifyUser,
    upload.array("photo", 10),
    hotelDetailsController
  );
hotelDetailRoute.route("/getallhotel").get(getAllHotelController);
hotelDetailRoute
  .route("/gethoteldetails")
  .get(authentication, checkVerifyUser, getHotelDetailsController);
hotelDetailRoute
  .route("/deletehoteldetails")
  .delete(authentication, checkVerifyUser, deleteHotelController);
  hotelDetailRoute.route("/searchhotels").get(searchHotels);
  hotelDetailRoute.route("/:id").get(getSingleDetails);
hotelDetailRoute
  .route("/getsingledetails")
  .post(authentication, getDetailOfParticularDate);
hotelDetailRoute.route("/houseType").post( filterViaHouseType);
hotelDetailRoute.route("/filterhotels").post(filterHotels);

export default hotelDetailRoute;
