import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote() {
  const history = useHistory();
  const addQuote = (quote) => {
    history.push("/quotes");
  }

  return (
    <>
      <h2>Add a quote</h2>
      <QuoteForm onAddQuote={addQuote} />
    </>
  );
}
