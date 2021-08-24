import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const numberOfItems = props.numberOfItems || "Error";
  return (
    <button className={styles.button} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}
