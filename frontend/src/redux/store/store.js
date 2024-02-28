import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "../slices/priceSlice";

export const store=configureStore({
    reducer:{
        price:priceSlice
    }
})