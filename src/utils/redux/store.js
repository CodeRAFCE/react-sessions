import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const loadCart = () => {
  //Why try catch? -
  // Because localStorage can throw an error if the stored data is not valid JSON
  // or if it's unavailable (e.g., in private browsing mode).
  // This ensures that our app doesn't crash and instead initializes with an empty cart
  // if there's an issue with loading the cart from localStorage.
  try {
    return JSON.parse(localStorage.getItem("cart")) || { items: [] };
  } catch {
    return { items: [] };
  }
};

const preloadedState = {
  cart: loadCart(),
};

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // Add more reducers here as your app grows
  },

  // if preloadedState exists, it will be used to initialize the store's state
  // instead of the default initial state defined in the reducers
  preloadedState,
});

appStore.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(appStore.getState().cart));
});

export default appStore;
