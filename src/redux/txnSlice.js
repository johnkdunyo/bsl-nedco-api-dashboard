import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../networks/api";

const initialState = {
  txns: null,
  dashboard: null,
};

export const getDashboard = createAsyncThunk("getDashboard", async () => {
  try {
    const response = await API.get("/v1.0/dashboard");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload(true);
    }
  }
});

export const getTxn = createAsyncThunk("getTxn", async () => {
  try {
    const response = await API.get("/v1.0/transactions");
    // console.log("firing get Txn");
    // console.log(response.data);
    // console.log(response.data.data)
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload(true);
    }
  }
});

export const getTxnPerPage = createAsyncThunk("getTxnPerPage", async (url) => {
  try {
    const response = await API.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload(true);
    }
  }
});

// export const getTxnPerPage = createAsyncThunk(
//   "getTxnPerPage",
//   async (token) => {
//     try {
//       // const url = new URL('');
//       // url.searchParams.set('status', 'pending');
//       // url.href
//       const response = await API.get(`/transactions?cursor=${token}`);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.log(error.response);
//     }
//   }
// );

export const getTxnByStan = createAsyncThunk("getTxnByStan", async (stan) => {
  try {
    const response = await API.get(`/v1.0/transactions/${stan}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload(true);
    }
  }
});

// export const getTxnBySearch = createAsyncThunk(
//   "getTxnBySearch",
//   async (query) => {
//     console.log(
//       "redux---->",
//       query.selectedStatus,
//       query.searchText,
//       query.dateFrom,
//       query.dateTo
//     );
//     try {
//       const response = await API.get(
//         `/transactions?status=${query.selectedStatus}&q=${query.searchText}&from=${query.dateFrom}&to=${query.dateTo}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error.response);
//     }
//   }
// );

export const getTxnBySearch = createAsyncThunk(
  "getTxnBySearch",
  async (url) => {
    try {
      const response = await API.get(url);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload(true);
      }
    }
  }
);

export const downloadTxnBySearch = createAsyncThunk(
  "getTxnBySearch",
  async (query) => {
    console.log(
      "redux---->",
      query.selectedStatus,
      query.searchText,
      query.dateFrom,
      query.dateTo
    );
    try {
      const response = await API.get(
        `/v1.0/transactions?status=${query.selectedStatus}&q=${query.searchText}&from=${query.dateFrom}&to=${query.dateTo}&export=true`
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload(true);
      }
    }
  }
);

const txnSlice = createSlice({
  name: "transactions",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getTxn.fulfilled, (state, action) => {
      state.txns = action.payload;
    });
    builder.addCase(getTxnPerPage.fulfilled, (state, action) => {
      state.txns = action.payload;
    });
    builder.addCase(getTxnBySearch.fulfilled, (state, action) => {
      state.txns = action.payload;
    });
    builder.addCase(getDashboard.fulfilled, (state, action) => {
      state.dashboard = action.payload;
    });
    // builder.addCase(getTxnByStan.fulfilled, (state, action) => {
    //     state.txns = action.payload
    // })
  },
});

export default txnSlice.reducer;
