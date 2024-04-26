import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.items.push(action);
    },
    RemoveFromCart:(state, action) => {
      state.items = state.items.filter(x => x.id !== action.payload.id)
    }
  },
});

export default CartSlice.reducer;
export const { AddToCart , RemoveFromCart } = CartSlice.actions;
