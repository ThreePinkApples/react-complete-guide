import ExpenseItem from "./ExpenseItem";
import "./FilteredExpenseItems.css";

export default function FilteredExpenseItems(props) {
  const sortByDate = (a, b) => (a.date < b.date ? 1 : -1);

  if (props.expenses.length === 0) {
      return <h2 className="filtered-expense-items__fallback">No expenses found.</h2>;
  }

  return <ul className="filtered-expense-items">
      {props.expenses
      .sort(sortByDate)
      .map((item) => <ExpenseItem item={item} key={item.id} />)}
  </ul>;
}
