import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <Header openCart={openCart} />
      <main>
        {cartOpen && <Cart onClose={closeCart} />}
        <Meals />
      </main>
    </>
  );
}
