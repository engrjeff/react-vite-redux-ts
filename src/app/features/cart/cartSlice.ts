import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;

      // if the product is already in the cart,
      // increment the quantity
      const existingProductIndex = state.cart.findIndex(
        (c) => c.product.id === product.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        state.cart.push({ product, quantity });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ productId: number }>) => {
      state.cart = state.cart.filter(
        (c) => c.product.id !== action.payload.productId
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
