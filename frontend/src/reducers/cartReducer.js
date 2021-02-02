import {
  CART_REMOVE_ITEM,
  CART_ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existingItem.product
              ? {
                  ...item,
                  quantity: item.quantity + existingItem.quantity,
                }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== action.payload
        ),
      };
    case INCREMENT_ITEM:
      let addedItem = state.cartItems.find(
        (cartItem) => cartItem.product === action.payload
      );
      addedItem.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify([...state.cartItems]));
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case DECREMENT_ITEM:
      let subtractedItem = state.cartItems.find(
        (cartItem) => cartItem.product === action.payload
      );
      subtractedItem.quantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify([...state.cartItems]));
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};
