import "./ExpenseItem.css";
import Card from "../Wrappers/Card/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const item = props.item;
  return (
    <Card key={item.id} id={item.id} className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
