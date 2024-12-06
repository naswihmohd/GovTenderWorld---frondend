import { createSlice } from "@reduxjs/toolkit";


const tendersSlice = createSlice({
    name: 'tenders',
    initialState: [],
    reducers: {
        addTender: (state, action) => action.payload,
        removeTender: (state, action) => {
            const id = action.payload.toString()
            return state = state.filter((state) => state._id !== id)
        },
        pendingTenders: (state, action) => {
            return state = state.filter((tender) => tender.status === 'Pending')
        },
        approvedTenders: (state, action) => {
            return state = state.filter((tender) => tender.status === 'Approved')
        },
        rejectedTenders: (state, action) => {
            return state = state.filter((tender) => tender.status === 'Rejected')
        },
        unpublishTenders: (state, action) => {
            return state = state.filter((tender) => tender.bidStatus === 'Pending')
        },
        openTenders: (state, action) => {
            return state = state.filter((tender) => tender.bidStatus === 'Open')
        },
        closedTenders: (state, action) => {
            return state = state.filter((tender) => tender.bidStatus === 'Closed')
        }
    }
})

export const { addTender, removeTender, pendingTenders, approvedTenders, rejectedTenders,unpublishTenders,closedTenders,openTenders } = tendersSlice.actions
export default tendersSlice.reducer