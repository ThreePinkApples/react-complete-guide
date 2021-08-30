import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, amount, totalPrice, price } = props.item;
  const dispatch = useDispatch();
  const increaseItem = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        title: title,
        amount: 1,
        price: price,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={decreaseItem}>-</button>
          <button onClick={increaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
