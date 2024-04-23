import express from 'express'
import {  approveReserve, chartInfo, getReservedHotelDetails, hotelReserveController, paymentCallbackResponse, paymentController, reserveCancel, totalReservedHotel } from '../controllers/hotel-reserve-controller.js'
import { authentication } from '../middleware/auth.js'
import { checkVerifyUser } from '../middleware/verifiedAuth.js'

const hotelReserveRouter=express.Router()

hotelReserveRouter.route('/addreserve').post(authentication,hotelReserveController)
hotelReserveRouter.route('/chartinfo').get(authentication,chartInfo)
hotelReserveRouter.route('/getreservehoteldetails').get(authentication,getReservedHotelDetails)
hotelReserveRouter.route('/totalreservehotel').get(authentication,totalReservedHotel)
hotelReserveRouter.route('/approve').post(authentication,checkVerifyUser,approveReserve)
hotelReserveRouter.route('/reservecancel/:id').delete(reserveCancel)
hotelReserveRouter.route('/payment').post(authentication,paymentController)
hotelReserveRouter.route('/payment/callback').get(paymentCallbackResponse)

export default hotelReserveRouter