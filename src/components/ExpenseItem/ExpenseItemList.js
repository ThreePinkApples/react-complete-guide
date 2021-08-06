import "./ExpenseItemList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemList(props) {
  const items = props.expenses;
  return (
    <div>
      {items.map((item) => <ExpenseItem item={item} />)}
    </div>
  );
}

export default ExpenseItemList;
