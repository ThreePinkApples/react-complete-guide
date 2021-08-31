import { Route, useParams, Link, Switch, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Frank Frankensteen",
    text: "I'm not the \"doctor\" you're looking for",
  },
  {
    id: "q2",
    author: "Henry Frankenstein",
    text: "Monster? What monster? I see no monster.",
  },
];

export default function QuoteDetail() {
  const params = useParams();
  const routeMatch = useRouteMatch();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Switch>
        <Route path={`${routeMatch.path}/comments`}>
          <Comments />
        </Route>
        <Route path="*">
          <div className="centered">
            <Link to={`${routeMatch.url}/comments`} className="btn--flat">
              Load comments
            </Link>
          </div>
        </Route>
      </Switch>
    </>
  );
}
