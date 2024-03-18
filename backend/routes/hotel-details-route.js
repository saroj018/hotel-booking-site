import express from 'express'
import { deleteHotelController, filterHotels, filterViaHouseType, getAllHotelController, getDetailOfParticularDate, getHotelDetailsController, getSingleDetails, hotelDetailsController } from "../controllers/hotel-details-controller.js";
import multer from 'multer';
import { authentication } from '../middleware/auth.js';
import { checkVerifyUser } from '../middleware/verifiedAuth.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname.split('.')[0] + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

const hotelDetailRoute=express.Router()

hotelDetailRoute.route('/addhoteldetails').post(authentication,checkVerifyUser,upload.array('photo',10),hotelDetailsController)
hotelDetailRoute.route('/getallhotel').get(getAllHotelController)
hotelDetailRoute.route('/gethoteldetails').get(authentication,getHotelDetailsController)
hotelDetailRoute.route('/deletehoteldetails').delete(authentication,checkVerifyUser,deleteHotelController)
hotelDetailRoute.route('/:id').get(getSingleDetails)
hotelDetailRoute.route('/getsingledetails').post(authentication,getDetailOfParticularDate)
hotelDetailRoute.route('/houseType').post(authentication,filterViaHouseType)
hotelDetailRoute.route('/filterhotels').post(filterHotels)

export default hotelDetailRoute