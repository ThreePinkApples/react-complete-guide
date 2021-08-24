import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = action.item;
    const updatedItems = prevState.items.concat(newItem);
    const newTotalAmount = prevState.totalAmount + (newItem.price * newItem.amount)
    return {
        items: updatedItems,
        totalAmount: newTotalAmount
    }
  } else if (action.type === "REMOVE_ITEM") {
      const itemId = action.itemId;
  }
  return DEFAULT_CART_STATE;
};

export default function CartProvider(props) {
  const [cartState, setCartState] = useReducer(cartReducer, DEFAULT_CART_STATE);

  const addItemToCart = (item) => {
    setCartState({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (itemId) => {
    setCartState({ type: "REMOVE_ITEM", itemId: itemId });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
