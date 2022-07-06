import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: { data: [], cart: [] },
  error: "",
};

export const fetchingData = createAsyncThunk("users/products", async () => {
  return axios.get("data.json").then((respo) => respo.data);
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const exist = state.users.cart.find((x) => x.id === action.payload.id);
      if (exist) {
        state.users.cart.map((user) => {
          return user.id === action.payload.id
            ? {...user, qnt: parseInt(user.qnt) + 1}
            : user
        });
      } else {
        state.users.cart.push({...action.payload, qnt: 1})
      }
    },
    deleteItems: (state, action) => {
      state.users.cart = state.users.cart.filter((cart) => {
        return cart.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchingData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchingData.fulfilled, (state, action) => {
      state.loading = false;
      state.users.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchingData.rejected, (state, action) => {
      state.loading = false;
      state.users.data = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { addItems, deleteItems } = userSlice.actions;
