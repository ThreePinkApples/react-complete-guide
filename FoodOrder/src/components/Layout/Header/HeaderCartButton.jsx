import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [buttonIsAnimating, setButtonIsAnimating] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonIsAnimating ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.totalAmount === 0) {
      return;
    }
    setButtonIsAnimating(true);
    const timer = setTimeout(() => {
      setButtonIsAnimating(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.totalAmount]);

  return (
    <button className={buttonClasses} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}
