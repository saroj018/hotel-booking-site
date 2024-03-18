import express from 'express'
import {  approveReserve, getReservedHotelDetails, hotelReserveController, totalReservedHotel } from '../controllers/hotel-reserve-controller.js'
import { authentication } from '../middleware/auth.js'
import { checkVerifyUser } from '../middleware/verifiedAuth.js'

const hotelReserveRouter=express.Router()

hotelReserveRouter.route('/addreserve').post(authentication,hotelReserveController)
hotelReserveRouter.route('/getreservehoteldetails').get(authentication,getReservedHotelDetails)
hotelReserveRouter.route('/totalreservehotel').get(authentication,totalReservedHotel)
hotelReserveRouter.route('/approve').post(authentication,checkVerifyUser,approveReserve)

export default hotelReserveRouter