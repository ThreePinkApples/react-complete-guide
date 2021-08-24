import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

export default function Cart(props) {
  const cartContext = useContext(CartContext);
  const items = cartContext.items || [
    { id: "c1", name: "Barbecue Sushi", amount: 4, price: 15.99 },
  ];
  const cartListItems = items.map((item) => <li>{item.name}</li>);

  return (
    <Modal onBackdropClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartListItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{15.99 * 4}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
