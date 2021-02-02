import React from "react";
import {
  Container,
  CartContainer,
  SummaryContainer,
  Title,
  CartList,
  CartHeader,
  ImageSection,
  NameSection,
  QuantitySection,
  PriceSection,
  RemoveSection,
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

ShoppingCart.CartHeader = function ShoppingCartCartHeader({
  children,
  ...restProps
}) {
  return (
    <CartHeader>
      <ImageSection />
      <NameSection>상품정보</NameSection>
      <QuantitySection>수량</QuantitySection>
      <PriceSection>가격</PriceSection>
      <RemoveSection />
    </CartHeader>
  );
};

ShoppingCart.CartBody = function ShoppingCartCartBody({
  children,
  ...restProps
}) {
  return (
    <CartBody>
      <ImageSection />
      <NameSection>상품정보</NameSection>
      <QuantitySection>수량</QuantitySection>
      <PriceSection>가격</PriceSection>
      <RemoveSection />
    </CartBody>
  );
};

ShoppingCart.SummaryContainer = function ShoppingCartSummaryContainer({
  children,
  ...restProps
}) {
  return <SummaryContainer>{children}</SummaryContainer>;
};
