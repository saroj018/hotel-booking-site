import { Schema, model } from "mongoose";

 const userVerifySchema= new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cemail:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true,
        defaultValue:'male'
    },
    verified:{
        type:Boolean,
        required:true
    },
    logindetails:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
},{
    timestamps:true
})


export const userVerifyModel=new model('verifieduser',userVerifySchema)