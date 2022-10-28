import { configureStore } from "@reduxjs/toolkit";
import txnSlice from "./txnSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    txn: txnSlice,
    user: userSlice,
  },
});

export default store;
