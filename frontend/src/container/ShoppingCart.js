import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";

export default function ShoppingCartContainer() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <ShoppingCart>
      <ShoppingCart.CartContainer>
        <ShoppingCart.Title>장바구니</ShoppingCart.Title>
        <ShoppingCart.CartList>
          <ShoppingCart.CartHeader />
          {cartItems.length > 0 &&
            cartItems.map(({ product, name, price, image }) => (
              <ShoppingCart.CartBody
                key={product}
                id={product}
                img={image}
                productName={name}
                price={price}
              ></ShoppingCart.CartBody>
            ))}
        </ShoppingCart.CartList>
      </ShoppingCart.CartContainer>
      <ShoppingCart.SummaryContainer>
        <ShoppingCart.Title>테스트</ShoppingCart.Title>
      </ShoppingCart.SummaryContainer>
    </ShoppingCart>
  );
}
