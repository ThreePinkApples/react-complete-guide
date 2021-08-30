import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const firebaseUrL =
  "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
const cartUrl = `${firebaseUrL}/cart.json`;

function App() {
  const { cartIsVisible } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch(cartUrl, {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: { "Content-Type": "application/json" },
    });
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
