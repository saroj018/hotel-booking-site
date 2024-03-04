import { Schema, model } from "mongoose";


const hotelReserveSchema=new Schema({
    Adults:{
        type:Number,
        required:true
    },
    Children:{
        type:Number,
        required:true
    },
    Infants:{
        type:Number,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    payMethod:{
        type:String,
        required:true
    },
    payVia:{
        type:String,
        required:true
    },
    reservedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const hotelReserveModel=new model('hotelreserve',hotelReserveSchema)