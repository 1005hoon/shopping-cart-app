import React from "react";
import ShoppingCart from "../components/ShoppingCart";

export default function ShoppingCartContainer() {
  return (
    <ShoppingCart>
      <ShoppingCart.CartContainer>
        <ShoppingCart.Title>장바구니</ShoppingCart.Title>
        <ShoppingCart.CartList></ShoppingCart.CartList>
      </ShoppingCart.CartContainer>
      <ShoppingCart.SummaryContainer></ShoppingCart.SummaryContainer>
    </ShoppingCart>
  );
}
