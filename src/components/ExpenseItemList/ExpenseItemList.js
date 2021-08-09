import "./ExpenseItemList.css";
import Card from "../Wrappers/Card/Card";
import ExpenseItem from "./ExpenseItem";


function ExpenseItemList(props) {
  const items = props.expenses;
  return (
    <Card className="expense-item-list">
      {items
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((item) => (
          <ExpenseItem item={item} />
        ))}
    </Card>
  );
}

export default ExpenseItemList;
