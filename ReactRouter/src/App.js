import { Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div>
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
