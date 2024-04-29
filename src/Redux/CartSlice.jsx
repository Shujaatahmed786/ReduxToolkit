import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      console.log("state pehle", state.items)
      state.items.push(action.payload);
      console.log("state after update", state.items)
    },
    RemoveFromCart:(state, action) => {
      console.log("state.items", state.items)
      console.log("actions", action)
      state.items = state.items.filter(x => x.id !== action.payload.id)
    }
  },
});

export default CartSlice.reducer;
export const { AddToCart , RemoveFromCart } = CartSlice.actions;
