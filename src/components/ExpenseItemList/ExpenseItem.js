import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const item = props.item;
  return (
    <div key={item.id} id={item.id} className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
