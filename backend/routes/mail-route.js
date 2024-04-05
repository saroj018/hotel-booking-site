import {Router} from 'express'
import { passwordResetOtp, sendMail } from '../controllers/mailController.js'
import { authentication } from '../middleware/auth.js'
import { verifyUser } from '../controllers/user-controller.js'
import { checkVerifyUser } from '../middleware/verifiedAuth.js'

 const emailRouter=Router()

emailRouter.route('/sendmail').post(authentication,verifyUser,sendMail)
emailRouter.route('/forgotpassword').post(passwordResetOtp)

export default emailRouter