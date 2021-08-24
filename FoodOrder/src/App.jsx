import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Cart />
        <Meals />
      </main>
    </>
  );
}
