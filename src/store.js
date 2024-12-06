import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import tendersReducer from './features/tendersSlice'
import tenderReducer from './features/tenderSlice'
import authorityReducer from './features/authoritySlice'
import bidReducer from './features/bidsSlice'



const store = configureStore({
    reducer:{
        users:userReducer,
        tenders:tendersReducer,
        tender:tenderReducer,
        authorities:authorityReducer,
        bids:bidReducer,
    }
})


export default store