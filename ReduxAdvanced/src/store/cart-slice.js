import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
  items: [],
  totalAmount: 0,
};
const firebaseUrL =
  "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
const cartUrl = `${firebaseUrL}/cart.json`;

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

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Saving cart",
        message: "Saving cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(cartUrl, {
        method: "PUT",
        body: JSON.stringify(cartData),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(
          "Sending cart data failed! Status code: " + response.status
        );
      }
      return await response.json();
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data saved",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
