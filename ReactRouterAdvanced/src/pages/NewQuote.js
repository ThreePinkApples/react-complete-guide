import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

export default function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuote = (quote) => {
    sendRequest(quote);
  };

  return (
    <>
      <h2>Add a quote</h2>
      <QuoteForm onAddQuote={onAddQuote} />
    </>
  );
}
