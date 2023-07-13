import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favoriteItems: number[];
}

const initialState: FavoriteState = {
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<{ productId: number }>) => {
      state.favoriteItems.push(action.payload.productId);
    },
    removeFromFavorite: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const favorites = state.favoriteItems.filter(
        (f) => f !== action.payload.productId
      );
      state.favoriteItems = favorites;
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
