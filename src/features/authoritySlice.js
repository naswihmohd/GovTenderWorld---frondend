import { createSlice } from "@reduxjs/toolkit";



const authoritySlice = createSlice({
    name:'authorities',
    initialState:[],
    reducers:{
        insertAuthority:(state,action)=>action.payload
    }
})

export const {insertAuthority} = authoritySlice.actions
export default authoritySlice.reducer