import express from 'express'
import { hotelDetailsController } from "../controllers/hotel-details-controller.js";
import multer from 'multer';

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

hotelDetailRoute.route('/addhoteldetails').post(upload.array('photo',10),hotelDetailsController)

export default hotelDetailRoute