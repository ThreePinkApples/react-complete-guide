import Card from "../Wrappers/Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

function ExpenseItemList(props) {
  const items = props.expenses;
  return (
    <Card className="expense-item-list">
      {items
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((item) => (
          <ExpenseItem item={item} key={item.id} />
        ))}
    </Card>
  );
}

export default ExpenseItemList;
