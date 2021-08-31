import { Redirect, Route, Switch } from "react-router-dom";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Quotes from "./components/pages/Quotes";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/new">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/">
          <h1>(╯°□°）╯︵ ┻━┻</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
