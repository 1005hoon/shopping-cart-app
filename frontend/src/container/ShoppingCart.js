import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";
import CartSummary from "../components/CartSummary";

import { getTotalCost } from "../utils/calculationHelper";
import Message from "../components/Message";

export default function ShoppingCartContainer() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [cost, setCost] = useState(0);
  const [finalCost, setFinalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(2500);

  useEffect(() => {
    const { cost, calculatedCost, discountRate, deliveryFee } = getTotalCost(
      cartItems
    );
    setCost(cost);
    setFinalCost(calculatedCost);
    setDiscount(discountRate);
    setDelivery(deliveryFee);
  }, [cartItems, cost, discount, delivery]);
  console.log(delivery);
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
        <CartSummary>
          <CartSummary.ListGroup>
            <CartSummary.ListItem text="총 상품 금액" cost={cost} />
            {discount > 0.05 && (
              <Message text="VIP 할인" rate={discount * 100} />
            )}
          </CartSummary.ListGroup>
          <CartSummary.ListGroup>
            <CartSummary.ListItem text="배송비" cost={delivery} />
          </CartSummary.ListGroup>
          <CartSummary.ListGroup>
            <CartSummary.SummaryTotal text="예상 결제 금액" cost={finalCost} />
          </CartSummary.ListGroup>
          <CartSummary.CheckoutButton>
            전체상품 주문하기
          </CartSummary.CheckoutButton>
        </CartSummary>
      </ShoppingCart.SummaryContainer>
    </ShoppingCart>
  );
}
