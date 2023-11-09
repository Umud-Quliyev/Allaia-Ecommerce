import { createSlice } from "@reduxjs/toolkit";

const loadCartItemsFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartItemsFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      state.splice(0, state.length, ...updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
