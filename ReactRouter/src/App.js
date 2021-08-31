import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <h1>¯\_(ツ)_/¯</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
