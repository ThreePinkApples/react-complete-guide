import { Redirect, Route, Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
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
      </main>
    </>
  );
}

export default App;
