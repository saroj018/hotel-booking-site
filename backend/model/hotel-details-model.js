import {Schema,model} from 'mongoose'
import { User } from './user-model.js'

const commonOption={
    type:String,
    required:true
}

const hotelDetailsSchema=Schema({
    homeType:commonOption,
    roomType:commonOption,
    houseTitle:commonOption,
    aboutHome:commonOption,
    description:commonOption,
    bookingType:commonOption,
    price:commonOption,
    discount:commonOption,
    customerNumber:{
        type:Object,
        required:true
    },
    locatedPlace:{
        type:Object,
        required:true
    },
    hotelImagesUrl:[String],
    uploadedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const hotelDetailsModel=model('hoteldetails',hotelDetailsSchema)