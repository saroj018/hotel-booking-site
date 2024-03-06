import express from 'express'
import {  hotelReserveController, totalReservedHotel } from '../controllers/hotel-reserve-controller.js'
import { authentication } from '../middleware/auth.js'

const hotelReserveRouter=express.Router()

hotelReserveRouter.route('/addreserve').post(authentication,hotelReserveController)
// hotelReserveRouter.route('/getreservehoteldetails').get(authentication,getReservedHotelDetails)
hotelReserveRouter.route('/totalreservehotel').get(authentication,totalReservedHotel)

export default hotelReserveRouter