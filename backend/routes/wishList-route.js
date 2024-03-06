import { Router } from "express"
import { addWishlist, getWishlist, removeFromWishlist } from "../controllers/wishList-controller.js"
import { authentication } from "../middleware/auth.js"

const wishListRoute=Router()

wishListRoute.route('/addonwishlist').post(authentication,addWishlist)
wishListRoute.route('/getwishlist').get(authentication,getWishlist)
wishListRoute.route('/getwishlist').delete(removeFromWishlist)

export default wishListRoute