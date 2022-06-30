import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new ticket
export const createTicket = createAsyncThunk();

export const authSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});
