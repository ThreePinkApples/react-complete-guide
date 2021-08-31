import { Route, useParams, Link, Switch } from "react-router-dom";
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
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NotFound />;
  }
  const commentPath = `/quotes/${quote.id}/comments`;

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Switch>
        <Route path={commentPath}>
          <Comments />
        </Route>
        <Route path="*">
          <div className="centered">
            <Link to={commentPath} className="btn--flat">
              Load comments
            </Link>
          </div>
        </Route>
      </Switch>
    </>
  );
}
