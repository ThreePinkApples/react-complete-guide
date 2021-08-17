import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../Wrappers/Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

export default function ExpenseItemList(props) {
  const items = props.expenses;
  const [filterYear, setFilterYear] = useState("");
  const filterOnYear = (year) => {
    if (year === "") {
      setFilterYear("");
    } else {
      setFilterYear(parseInt(year));
    }
  };

  return (
    <Card className="expense-item-list">
      <ExpenseFilter filterOnYear={filterOnYear} />
      {items
        .filter(
          (expense) =>
            filterYear === "" || expense.date.getFullYear() === filterYear
        )
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((item) => (
          <ExpenseItem item={item} key={item.id} />
        ))}
    </Card>
  );
}
