import express from 'express'
import { chagePassword, loginUser, resetPassword, signupUser } from '../controllers/user-controller.js'
import { authentication } from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.route('/signup').post(signupUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/updatepassword').post(chagePassword)
userRouter.route('/getotp').post(chagePassword)
userRouter.route('/resetpassword').post(resetPassword)

export default userRouter