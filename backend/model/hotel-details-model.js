import {Schema,model} from 'mongoose'
import { User } from './user-model.js'

const commonOption={
    type:String,
    required:true
}

const imageSchema = Schema({
    url: { type: String, required: true },
    public_id: { type: String, required: true }
  });
  

const hotelDetailsSchema=Schema({
    homeType:commonOption,
    roomType:commonOption,
    houseTitle:commonOption,
    aboutHome:commonOption,
    description:commonOption,
    bookingType:commonOption,
    price:{
        adults:{
            type:String,
            required:true
        },
        childrens:{
            type:String,
            required:true
        },
        infants:{
            type:String,
            required:true
        },
    },
    discount:commonOption,
    customerNumber:{
        type:Object,
        required:true
    },
    offerServices:[String],
    locatedPlace:{
        type:Object,
        required:true
    },
    idOfImage:[imageSchema],
    uploadedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const hotelDetailsModel=model('hoteldetails',hotelDetailsSchema)