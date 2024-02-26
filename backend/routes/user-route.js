import express from 'express'
import { loginUser, signupUser } from '../controllers/user-controller.js'
import { authentication } from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.route('/signup').post(signupUser)
userRouter.route('/login').post(loginUser)

export default userRouter