import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isSortingAsc = params.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const changeSorting = () => {
    const newSort = isSortingAsc ? "desc" : "asc";
    history.push(`${location.pathname}?sort=${newSort}`);
  };

  return (
    <Fragment>
      <div className={styles.sorting}>
        <button onClick={changeSorting}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
