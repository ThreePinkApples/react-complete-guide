import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../Wrappers/Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

function ExpenseItemList(props) {
  const items = props.expenses;
  const [filterYear, setFilterYear] = useState("");
  const filterOnYear = (year) => {
    setFilterYear(parseInt(year));
  };

  return (
    <div>
      <ExpenseFilter filterOnYear={filterOnYear} />
      <Card className="expense-item-list">
        {items
          .filter((expense) => filterYear === "" || expense.date.getFullYear() === filterYear)
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((item) => (
            <ExpenseItem item={item} key={item.id} />
          ))}
      </Card>
    </div>
  );
}

export default ExpenseItemList;
