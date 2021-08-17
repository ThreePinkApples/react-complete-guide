import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <div className="new-expense">
      {formOpen === true && (
        <ExpenseForm addExpense={props.addExpense} onCancel={closeForm} />
      )}
      {formOpen === false && (
        <button type="button" onClick={openForm}>
          Add new expense
        </button>
      )}
    </div>
  );
}
