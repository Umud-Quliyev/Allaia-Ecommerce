import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFromFavorites: (state, action) => {
      const updatedFavorites = state.filter(
        (item) => item.id !== action.payload.id
      );
      state.splice(0, state.length, ...updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
