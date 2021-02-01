import React from "react";
import {
  Container,
  CartContainer,
  SummaryContainer,
  Title,
  CartList,
} from "./styles/ShoppingCart";

export default function ShoppingCart({ children }) {
  return <Container>{children}</Container>;
}

ShoppingCart.CartContainer = function ShoppingCartCartContainer({
  children,
  ...restProps
}) {
  return <CartContainer>{children}</CartContainer>;
};

ShoppingCart.Title = function ShoppingCartTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

ShoppingCart.CartList = function ShoppingCartCartList({
  children,
  ...restProps
}) {
  return <CartList>{children}</CartList>;
};

ShoppingCart.SummaryContainer = function ShoppingCartSummaryContainer({
  children,
  ...restProps
}) {
  return <SummaryContainer>{children}</SummaryContainer>;
};
