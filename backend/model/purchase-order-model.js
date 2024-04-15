import { Schema, model } from "mongoose";

const purchaseOrder=new Schema({
    itemName:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    reserveId:{
        type:String,
        required:true
    },

})

export const purchaseOrderModel=model('purchaseOrder',purchaseOrder)