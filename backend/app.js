import userRouter from './routes/user-route.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import hotelDetailRoute from './routes/hotel-details-route.js'
import hotelReserveRouter from './routes/hotel-reserve-route.js'
import wishListRoute from './routes/wishList-route.js'
import emailRouter  from './routes/mail-route.js'
import reviewRouter from './routes/hotel-review.route.js'

export const app=express()
app.use(express.json({limit:'16kb'}))
dotenv.config({path:'./env'})
app.use(cors({origin:'*'}))
app.use(cookieParser())


app.use('/api/user',userRouter)
app.use('/api/hotel',hotelDetailRoute)
app.use('/api/reserve',hotelReserveRouter)
app.use('/api/wishlist',wishListRoute)
app.use('/api/feedback',reviewRouter)
app.use('/api',emailRouter)