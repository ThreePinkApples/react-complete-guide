import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
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
  const [loadedQuote, setLoadedQuote] = useState(null);
  const {
    sendRequest: getQuote,
    status: httpStatus,
    data,
    error: httpError,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    if (loadedQuote === null) {
      getQuote(params.quoteId);
    }
  }, [getQuote, params, loadedQuote]);

  useEffect(() => {
    if (httpStatus === "completed") {
      setLoadedQuote(data);
    }
  }, [httpStatus, data]);

  if (httpStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (httpError) {
    return <p className="centered focus">{httpError}</p>;
  } else if (!loadedQuote) {
    return <NotFound message={"Comment not found"} />;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
