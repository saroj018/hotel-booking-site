import userRouter from './routes/user-route.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

export const app=express()
app.use(express.json())
dotenv.config()
app.use(cors())

app.use('/api/user',userRouter)
