import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../networks/api";

const initialState = {
  isLoggedIn: false,
  user: {},
  admins: [],
};

export const getAllAdmins = createAsyncThunk("getAllAdmins", async () => {
  try {
    const response = await API.get("/admin");
    return {
      status: response.status,
      data: response.data.data,
    };
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload(true);
    }
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setCurrentUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOutCurrentUser: (state) => {
      state.user = {};
      state.admins = [];
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllAdmins.fulfilled, (state, action) => {
      state.admins = action.payload.data;
    });
  },
});

export const { setCurrentUser, logOutCurrentUser } = userSlice.actions;

export default userSlice.reducer;
