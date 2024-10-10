import { createSlice } from '@reduxjs/toolkit';
import { getBasketFromLS } from '../lib/getCartFromLS';
import { CartSliceProps } from './types';

const initialState: CartSliceProps = getBasketFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onAddCard(state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    onMinusCard(state, action) {
      const findCard = state.cart.find((obj) => obj.id === action.payload);

      if (findCard) {
        findCard.quantity--;
      }
    },
    onPlusCard(state, action) {
      const findCard = state.cart.find((obj) => obj.id === action.payload);

      if (findCard) {
        findCard.quantity++;
      }
    },
    onRemoveCard(state, action) {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload);
    },
    onClearCart(state) {
      state.cart = [];
    },
  },
});

export const { onAddCard, onMinusCard, onPlusCard, onRemoveCard, onClearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
