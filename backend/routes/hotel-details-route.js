import express from 'express'
import { getHotelDetailsController, hotelDetailsController } from "../controllers/hotel-details-controller.js";
import multer from 'multer';
import { authentication } from '../middleware/auth.js';

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

hotelDetailRoute.route('/addhoteldetails').post(authentication,upload.array('photo',10),hotelDetailsController)
hotelDetailRoute.route('/gethoteldetails').get(getHotelDetailsController)

export default hotelDetailRoute