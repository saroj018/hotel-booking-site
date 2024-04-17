import { Schema, model } from "mongoose";

const reviewSchema=new Schema({
    rating:{
        type:Number,
        required:true
    },
    reviewMessage:{
        type:String,
        trim:true,
    },
    hotelId:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
})

export const reviewModel=model('review',reviewSchema)