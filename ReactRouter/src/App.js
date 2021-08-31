import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/">
            <h1>¯\_(ツ)_/¯</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
