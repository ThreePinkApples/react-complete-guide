import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../Wrappers/Card/Card";
import FilteredExpenseItems from "./FilteredExpenseItems";
import "./ExpenseItemList.css";

export default function ExpenseItemList(props) {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("");
  const setFilterOnYear = (year) => {
    if (year === "") {
      setFilterYear(year);
    } else {
      setFilterYear(parseInt(year));
    }
  };

  const filteredExpenses = expenses.filter((expense) => {
    return filterYear === "" || expense.date.getFullYear() === filterYear;
  });

  return (
    <Card className="expense-item-list">
      <ExpenseFilter filterOnYear={setFilterOnYear} />
      <FilteredExpenseItems expenses={filteredExpenses}/>
    </Card>
  );
}
