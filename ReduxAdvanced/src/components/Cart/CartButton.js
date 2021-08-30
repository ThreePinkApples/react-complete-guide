import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart);

  const toggleCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
