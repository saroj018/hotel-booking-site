import express from 'express'
import { chagePassword, loginUser, resetPassword, signupUser, verifyUser } from '../controllers/user-controller.js'
import { authentication } from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.route('/signup').post(signupUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/updatepassword').post(authentication,chagePassword)
userRouter.route('/getotp').post(authentication,chagePassword)
userRouter.route('/resetpassword').post(authentication,resetPassword)

export default userRouter