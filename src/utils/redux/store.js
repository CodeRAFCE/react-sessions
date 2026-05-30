import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // Add more reducers here as your app grows
  },
});

export default appStore;
