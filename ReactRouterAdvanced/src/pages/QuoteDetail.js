import { useEffect } from "react";
import {
  Link, Route, Switch, useParams, useRouteMatch
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import NotFound from "./NotFound";

export default function QuoteDetail() {
  const params = useParams();
  const routeMatch = useRouteMatch();
  const {
    sendRequest: getQuote,
    status: httpStatus,
    data: quote,
    error: httpError,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    getQuote(params.quoteId);
  }, [getQuote, params]);

  if (httpStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (httpError) {
    return <p className="centered focus">{httpError}</p>
  } else if (!quote) {
    return <NotFound message={"Comment not found"} />;
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
