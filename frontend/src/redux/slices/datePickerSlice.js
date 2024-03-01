import { createSlice } from "@reduxjs/toolkit";

export const datePickerSlice=createSlice({
    name:'datePicker',
    initialState:{
        date:[]
    },
    reducers:{
        getDateRange:(state,action)=>{
state.date=action.payload
        }
    }
})

export const {getDateRange}=datePickerSlice.actions
export default datePickerSlice.reducer