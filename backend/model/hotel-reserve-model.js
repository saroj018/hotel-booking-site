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
        ref:"users"
    },
    hotel:{
        type:Schema.Types.ObjectId,
        ref:"hoteldetails"
    },
    reserveDate:{
        type:String,
        required:true
    },
    paid:{
        type:Boolean,
        required:true
    },
    reserveTime:{
        type:String,
        required:true
    },
    dateList:{
        type:[String],
        required:true
    },
    reserveType:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

export const hotelReserveModel=new model('hotelreserve',hotelReserveSchema)