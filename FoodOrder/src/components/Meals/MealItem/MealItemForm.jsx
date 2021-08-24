import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [isFormValid, setIsFormValid] = useState(true);
  const amountInputRef = useRef();
  const addItem = (event) => {
    event.preventDefault();
    const amount = parseInt(amountInputRef.current.value.trim());
    if (amount < 1 ||  amount > 5) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.addToCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={addItem}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `${props.mealId}-input`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Buy</button>
      {!isFormValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
