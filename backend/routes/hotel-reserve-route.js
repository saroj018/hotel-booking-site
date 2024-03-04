import express from 'express'
import { hotelReserveController } from '../controllers/hotel-reserve-controller.js'
import { authentication } from '../middleware/auth.js'

const hotelReserveRouter=express.Router()

hotelReserveRouter.route('/addreserve').post(authentication,hotelReserveController)

export default hotelReserveRouter