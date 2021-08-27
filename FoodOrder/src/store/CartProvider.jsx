import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = action.item;
    const newTotalAmount =
      prevState.totalAmount + newItem.price * newItem.amount;
    const existingIndex = prevState.items.findIndex(
      (item) => item.id === newItem.id
    );
    const existingItem = prevState.items[existingIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + newItem.amount,
      };
      updatedItems = [...prevState.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = prevState.items.concat(newItem);
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const itemId = action.itemId;
    const existingIndex = prevState.items.findIndex(
      (item) => item.id === itemId
    );
    const existingItem = prevState.items[existingIndex];
    if (existingItem) {
      let updatedItems = [...prevState.items];
      const newTotalAmount = prevState.totalAmount - existingItem.price;
      if (existingItem.amount === 1) {
        updatedItems.splice(existingIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems[existingIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }
  } else if (action.type === "CLEAR") {
    return DEFAULT_CART_STATE;
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

  const clearCart = () => {
    setCartState({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
