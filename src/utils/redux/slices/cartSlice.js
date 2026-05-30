import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        return;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      // OR
      // state.items = [];
    },
  },
});

//cartSlice is an object with 2 properties - reducer and actions
// reducer is a function that will be used in the store to update the state
// actions is an object with 3 functions - addItem, removeItem, clearCart

export const { addItem, removeItem, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
