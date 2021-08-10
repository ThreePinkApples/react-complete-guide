import { useState } from "react";
import Card from "../Wrappers/Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


export default function ExpenseItem(props) {
  const item = props.item;

  const [title, setTitle] = useState(item.title);

  const clickHandler = (e) => {
    setTitle(title + "1");
  };

  return (
    <Card id={item.id} className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
