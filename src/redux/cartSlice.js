import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
      }
    },

    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      const goodId = action.payload.good.id;
      const quantity = action.payload.quantity;

      const existingItem = state.cartItems.find(
        (item) => item.goodId === goodId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          id: timeId,
          goodId,
          quantity,
          price: action.payload.good.price,
          totalPrice: action.payload.quantity * action.payload.good.price,
        });
      }
    },
  },
});

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
