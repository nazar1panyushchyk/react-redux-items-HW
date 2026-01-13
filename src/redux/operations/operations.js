import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://695d374179f2f34749d75550.mockapi.io/items",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchItems = createAsyncThunk(
  "items/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addItem = createAsyncThunk(
  "items/addItem",
  async (id, thunkAPI) => {
    return id;
  }
);

// export const removeItem = createAsyncThunk(
//   "items/removeItem",
//   async (id, thunkAPI) => {
//     try {
//       const response = await api.delete(`/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
