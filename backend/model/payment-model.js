import { Schema, model } from "mongoose";

const paymentSchema=new Schema({
    payment_id:{
        type:String,
        required:true
    },
    transaction_id:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    purchase_order_id:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    total_amount:{
        type:String,
        required:true
    }
})

export const paymentModel=model('payment',paymentSchema)