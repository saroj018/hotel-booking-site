// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useGetFetch } from "../../hooks/fetch-data";

import { createSlice } from "@reduxjs/toolkit";

// export const addOnWishlist=createAsyncThunk('addwishlist',async(id)=>{
//     const result=await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
//     console.log(result);
//     return result
// })

//  const wishListSlice=createSlice({
//     name:'wishlist',
//     initialState:{
//         item:[],
//         error:''
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(addOnWishlist.rejected,(state,action)=>{
//             state.error='there is some irror'+action.error.message
//         }),
//         builder.addCase(addOnWishlist.fulfilled,(state,action)=>{
//             state.item.push(action.payload)
//         })
//     }
// })

// export default wishListSlice.reducer


export const wishListSlice=createSlice({
    name:'addonwishlist',
    initialState:{
        id:''
    },
    reducers:{
        addWishlist:(state,action)=>{
            state.id=action.payload
        }
    }
})

export const {addWishlist} =wishListSlice.actions
export default wishListSlice.reducer