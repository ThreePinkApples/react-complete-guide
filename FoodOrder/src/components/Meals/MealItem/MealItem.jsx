import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const cartContext = useContext(CartContext);
  const price = `$${props.price}`;
  const addToCart = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    cartContext.addItem(item);
  };

  return (
    <li className={styles.meal} id={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm mealId={props.id} addToCart={addToCart} />
      </div>
    </li>
  );
}
