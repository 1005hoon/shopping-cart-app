import React from "react";
import { Container, Title, Frame } from "./styles/ProductList";

export default function ProductList({ children }) {
  return <Container>{children}</Container>;
}

ProductList.Title = function ProductListTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProductList.Frame = function ProductListFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
