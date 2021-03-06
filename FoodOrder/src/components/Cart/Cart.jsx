import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import useHttp from "../hooks/use-http";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

export default function Cart(props) {
  const cartContext = useContext(CartContext);
  const [shouldShowCheckout, setShouldShowCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const items = cartContext.items || [
    { id: "c1", name: "Barbecue Sushi", amount: 4, price: 15.99 },
  ];
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const addToCart = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeFromCart = (itemId) => {
    cartContext.removeItem(itemId);
  };

  const showCheckout = () => {
    setShouldShowCheckout(true);
  };

  const onClose = () => {
    setShouldShowCheckout(false);
    props.onClose();
  };

  const { sendRequest, isLoading: httpIsLoading, error: httpError } = useHttp();

  const placeOrder = (customerInfo) => {
    const order = {
      customer: customerInfo,
      meals: cartContext.items.map((item) => {
        return { id: item.id, amount: item.amount };
      }),
      totalAmount: parseFloat(cartContext.totalAmount.toFixed(2)),
      time: new Date().toISOString(),
    };
    sendRequest(
      {
        url: props.ordersUrl,
        method: "POST",
        body: order,
      },
      (respondData) => {
        setDidSubmit(true);
        if (!httpError) {
          setShouldShowCheckout(false);
          cartContext.clearCart();
        }
      }
    );
  };

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

  const actions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={onClose}>
        Close
      </button>
      <button
        className={styles.button}
        onClick={showCheckout}
        disabled={!hasItems}
      >
        Checkout
      </button>
    </div>
  );

  const modalContent = (
    <>
      <ul className={styles["cart-items"]}>{cartListItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!shouldShowCheckout && actions}
      {shouldShowCheckout && (
        <Checkout onCancel={onClose} onPlaceOrder={placeOrder} />
      )}
    </>
  );

  const isSubmittingContent = <p>Placing order...</p>;
  const didSubmitContent = <p>Order placed!</p>;

  return (
    <Modal onBackdropClick={onClose}>
      {httpError && <p>Failed to place order! Please try again. {httpError}</p>}
      {!httpIsLoading && (!didSubmit || httpError) && modalContent}
      {httpIsLoading && isSubmittingContent}
      {!httpIsLoading && didSubmit && !httpError && didSubmitContent}
    </Modal>
  );
}
