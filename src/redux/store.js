import { configureStore } from "@reduxjs/toolkit";
import txnSlice from "./txnSlice";


const store = configureStore ({
    reducer: {
        txn: txnSlice
    }
})


export default store;