import {Router} from 'express'
import { sendMail } from '../controllers/mailController.js'
import { authentication } from '../middleware/auth.js'
import { verifyUser } from '../controllers/user-controller.js'

 const emailRouter=Router()

emailRouter.route('/sendmail').post(authentication,verifyUser,sendMail)

export default emailRouter