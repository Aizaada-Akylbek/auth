import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const postUser = createAsyncThunk("auth/postUser", async (data) => {
  try {
    return await userApi.createUser(data);
  } catch (error) {
    throw error;
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, (state, { payload }) => {
        state.userData = payload.data;
        state.isLoading = false;
      })
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
