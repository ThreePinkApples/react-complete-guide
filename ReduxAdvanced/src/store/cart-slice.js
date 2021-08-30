import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.amount,
        });
      } else {
        existingItem.amount += newItem.amount;
        existingItem.totalPrice += newItem.price * newItem.amount;
      }
      state.totalAmount += newItem.amount;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        if (existingItem.amount === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          existingItem.amount--;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalAmount--;
      }
    },
    clear(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
