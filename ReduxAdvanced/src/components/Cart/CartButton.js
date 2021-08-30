import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
