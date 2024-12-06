import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUsers:(state,action)=>action.payload,
    }

})

export const {addUsers} =userSlice.actions
export default userSlice.reducer