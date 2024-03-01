import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "../slices/priceSlice";
import datePickerSlice from "../slices/datePickerSlice";

export const store=configureStore({
    reducer:{
        price:priceSlice,
        datePicker:datePickerSlice
    }
})