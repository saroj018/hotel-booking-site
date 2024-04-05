import {Schema,model} from 'mongoose'

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
            type:Number,
            required:true
        },
        childrens:{
            type:Number,
            required:true
        },
        infants:{
            type:Number,
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
        ref:'users'
    }
})

export const hotelDetailsModel=model("hoteldetails",hotelDetailsSchema)

const wishListSchema=new Schema({
    hotel:{
        type:Schema.Types.ObjectId,
        ref:'hoteldetails'
    },
    addedBy:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
})

export const wishListModel=model('wishlist',wishListSchema)