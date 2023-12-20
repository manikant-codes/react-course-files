import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buy: (state, action) => {
      state.numberOfCakes--;
    },
    restock: (state, action) => {
      state.numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

export const { buy, restock } = cakeSlice.actions;

export default cakeSlice.reducer;
