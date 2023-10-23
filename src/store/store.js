import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice.js";
import favoriteReducer from "../store/favoriteSlice.js";
import cartReducer from "./cartSlice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    favorites: favoriteReducer,
    added: cartReducer,
  },
});
