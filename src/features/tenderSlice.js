import { createSlice } from "@reduxjs/toolkit";



const tenderSlice= createSlice({
    name:'tender',
    initialState:{},
    reducers:{
        insertTender:(state,action)=>action.payload
    }
})


export const {insertTender} = tenderSlice.actions
export default tenderSlice.reducer
