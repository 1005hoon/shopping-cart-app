import React, { useEffect } from "react";

import ProductList from "../components/ProductList";
import Product from "../components/Product";
import productsData from "../products";
import Spinner from "../components/Spinner";

export default function ProductListContainer() {
  const [products, setProducts] = useState([...productsData]);

  return (
    <ProductList>
      <ProductList.Title>Apple Watch 쇼핑하기</ProductList.Title>
      <ProductList.Frame>
        {products.map(({ name, price, image }) => (
          <Product key={name}>
            {/* <Spinner /> */}
            <Product.ImageContainer src={image} />
            <Product.Name>{name}</Product.Name>
            <Product.Price>{price}</Product.Price>
          </Product>
        ))}
      </ProductList.Frame>
    </ProductList>
  );
}
