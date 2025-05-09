import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>(
  "/sellerAuth/sellerLogin",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/login", loginRequest);
      console.log("login otp", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("jwt", jwt);
      return { success: true, jwt };
    } catch (error) {
      console.log("error - - -", error);
      return rejectWithValue(error);
    }
  }
);
