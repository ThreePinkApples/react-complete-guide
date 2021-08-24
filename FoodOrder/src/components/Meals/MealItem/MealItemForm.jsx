import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
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
      <button>Buy</button>
    </form>
  );
}
