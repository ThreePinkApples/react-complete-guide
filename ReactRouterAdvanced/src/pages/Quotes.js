import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

export default function Quotes() {
  const {
    sendRequest,
    status: requestStatus,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (requestStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  } else if (error) {
    return <p className="centered focus">{error}</p>;
  } else if (
    requestStatus === "completed" &&
    (!loadedQuotes || loadedQuotes.length === 0)
  ) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
}
