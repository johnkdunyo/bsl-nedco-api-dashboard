import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../networks/api";


const initialState ={
    txns : null
}

export const getTxn = createAsyncThunk("getTxn", async() => {
    try {
        const response = await API.get("/transactions")
        console.log('firing get Txn')
        console.log(response.data)
        // console.log(response.data.data)
        return response.data
    } catch (error) {
        console.log(error.response)
    }
})

export const getTxnPerPage = createAsyncThunk("getTxnPerPage", async(token) => {
    try {
        const response = await API.get(`/transactions?cursor=${token}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response)
    }
})


export const getTxnByStan = createAsyncThunk("getTxnByStan", async(stan) => {
    try {
        const response = await API.get(`transactions/${stan}`);
        return response.data
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
        builder.addCase(getTxnPerPage.fulfilled, (state, action)=> {
            state.txns = action.payload
        })
        // builder.addCase(getTxnByStan.fulfilled, (state, action) => {
        //     state.txns = action.payload
        // })
    }

})



export default txnSlice.reducer;