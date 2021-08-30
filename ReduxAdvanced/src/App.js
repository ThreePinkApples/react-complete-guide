import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification/Notification";
import { uiActions } from "./store/ui-slice";

const firebaseUrL =
  "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
const cartUrl = `${firebaseUrL}/cart.json`;
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsVisible } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Saving cart",
          message: "Saving cart data...",
        })
      );
      const response = await fetch(cartUrl, {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(
          "Sending cart data failed! Status code: " + response.status
        );
      }
      const responseData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data saved",
        })
      );
      return responseData;
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
