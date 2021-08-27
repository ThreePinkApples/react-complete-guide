import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const firebaseUrl =
  "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
const mealsUrl = `${firebaseUrl}/meals.json`;
const ordersUrl = `${firebaseUrl}/orders.json`;

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onClose={closeCart} />}
      <Header openCart={openCart} ordersUrl={ordersUrl} />
      <main>
        <Meals mealsUrl={mealsUrl} ordersUrl={ordersUrl} />
      </main>
    </CartProvider>
  );
}
