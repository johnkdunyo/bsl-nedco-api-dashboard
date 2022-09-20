import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../networks/api";


const initialState ={
    txns : null
}

export const getTxn = createAsyncThunk("getTxn", async() => {
    try {
        const response = await API.get("/transactions")
        console.log('firing get Txn')
        console.log(response)
        // console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error.response)
    }
})


const txnSlice = createSlice({
    name: 'transactions',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getTxn.fulfilled, (state, action)=>{
            state.txns = action.payload
        })
    }

})



export default txnSlice.reducer;