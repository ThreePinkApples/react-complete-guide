import { useSelector } from "react-redux";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
