import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const formInitValues = {
    title: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = useState(formInitValues);

  const titleChangeHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };

  const dateChangeHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addExpense(formData);
    setFormData(formInitValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={
              (formData.date !== "" && formData.date.toISOString().split("T")[0]) || ""
            }
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
