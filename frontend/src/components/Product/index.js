import React from "react";
import {
  Container,
  ImageContainer,
  ShoppingCart,
  Name,
  Price,
} from "./styles/Product";
import { formatCurrency, formatName } from "../../utils/textFormatter";

export default function Product({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Product.ImageContainer = function ProductImageContainer({
  children,
  ...restProps
}) {
  return (
    <ImageContainer {...restProps}>
      <ShoppingCart />
    </ImageContainer>
  );
};

Product.Name = function ProductName({ children, ...restProps }) {
  return <Name {...restProps}>{formatName(children)}</Name>;
};

Product.Price = function ProductPrice({ children, ...restProps }) {
  return <Price {...restProps}>{formatCurrency(children)} 원</Price>;
};
