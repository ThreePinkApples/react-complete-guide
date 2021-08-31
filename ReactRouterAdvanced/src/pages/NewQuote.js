import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote() {
  const addQuote = (quote) => {
    console.log(quote);
  }

  return (
    <>
      <h2>Add a quote</h2>
      <QuoteForm onAddQuote={addQuote} />
    </>
  );
}
