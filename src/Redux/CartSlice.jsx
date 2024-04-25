import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, payload) => {
      state.items.push(payload);
    },
  },
});

export default CartSlice.reducer;
export const { AddToCart } = CartSlice.actions;
