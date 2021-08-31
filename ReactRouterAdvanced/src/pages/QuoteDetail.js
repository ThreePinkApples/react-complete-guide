import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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
    return <h2>ಠ_ಠ</h2>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
