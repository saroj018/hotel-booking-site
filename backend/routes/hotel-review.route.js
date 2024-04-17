import { Router } from "express";
import { getHotelReview, hotelReview } from "../controllers/hotel.review.controller.js";
import { authentication } from "../middleware/auth.js";

const reviewRouter=Router()

reviewRouter.route('/review').post(authentication,hotelReview)
reviewRouter.route('/review/:id').get(getHotelReview)

export default reviewRouter