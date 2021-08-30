import cartSlice from "./cart-slice";
import { uiActions } from "./ui-slice";

const firebaseUrL =
  "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
const cartUrl = `${firebaseUrL}/cart.json`;

const cartActions = cartSlice.actions;
export default cartActions;

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching cart",
        message: "Fetching cart data...",
      })
    );
    const fetchData = async () => {
      const response = await fetch(cartUrl);
      if (!response.ok) {
        throw new Error(
          "Sending cart data failed! Status code: " + response.status
        );
      }
      return await response.json();
    };
    let cartData;
    try {
      cartData = await fetchData();
      dispatch(uiActions.clearNotification());
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
      return;
    }
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalAmount: cartData.totalAmount || 0,
      })
    );
  };
};

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
        body: JSON.stringify({
          items: cartData.items,
          totalAmount: cartData.totalAmount,
        }),
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
