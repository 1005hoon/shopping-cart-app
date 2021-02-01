import React from "react";
import ProductList from "../components/ProductList";

export default function ProductListContainer() {
  return (
    <ProductList>
      <ProductList.Title>Apple Watch 쇼핑하기</ProductList.Title>
      <ProductList.Frame>
        <div class="container">item 1</div>
        <div class="container">item 1</div>
        <div class="container">item 1</div>
        <div class="container">item 1</div>
        <div class="container">item 1</div>
      </ProductList.Frame>
    </ProductList>
  );
}
