import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
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
      state.changed = true;
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
        state.changed = true;
      }
    },
    clear(state) {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
      state.changed = initialState.changed;
    },
  },
});

export default cartSlice;
