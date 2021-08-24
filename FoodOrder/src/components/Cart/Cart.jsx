import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

export default function Cart(props) {
  const cartContext = useContext(CartContext);
  const items = cartContext.items || [
    { id: "c1", name: "Barbecue Sushi", amount: 4, price: 15.99 },
  ];
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const addToCart = (item) => {
      cartContext.addItem({
          ...item,
          amount: 1
      })
  }

  const removeFromCart = (itemId) => {
      cartContext.removeItem(itemId);
  }

  const cartListItems = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addToCart.bind(null, item)}
      onRemove={removeFromCart.bind(null, item.id)}
    >
      {item.name}
    </CartItem>
  ));

  return (
    <Modal onBackdropClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartListItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button} disabled={!hasItems}>
          Order
        </button>
      </div>
    </Modal>
  );
}
