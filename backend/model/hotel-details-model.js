import {Schema,model} from 'mongoose'

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
    hotelImagesUrl:[String]
})

export const hotelDetailsModel=model('hoteldetails',hotelDetailsSchema)