import QuoteList from "../components/quotes/QuoteList";

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

export default function Quotes() {
    const quotes = DUMMY_QUOTES
  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
}
