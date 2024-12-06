import { createSlice } from "@reduxjs/toolkit";


const bidSlice = createSlice({
    name:'bids',
    initialState:[],
    reducers:{
        addBids: (state, action) => action.payload,
        onProcessBids: (state, action) => {
            return state = state.filter((bid) => bid.bidStatus === 'On Process')
        },
        approvedBids: (state, action) => {
            return state = state.filter((bid) => bid.bidStatus === 'Approved')
        },
        rejectedBids: (state, action) => {
            return state = state.filter((bid) => bid.bidStatus === 'Rejected')
        },
    }

})


export const {addBids,onProcessBids,approvedBids,rejectedBids} = bidSlice.actions
export default bidSlice.reducer