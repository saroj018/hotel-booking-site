import { createSlice } from "@reduxjs/toolkit";

export const priceSlice=createSlice({
    name:'price',
    initialState:{
        totalNight:0,
        totalPrice:0
    },
    reducers:{
        addPrice:(state,action)=>{
return action.payload
        }
    }
})

export const {addPrice}=priceSlice.actions
export default priceSlice.reducer