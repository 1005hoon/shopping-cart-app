import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductList from "../components/ProductList";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

import { listProducts } from "../actions/productAction";

export default function ProductListContainer() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <ProductList>
      <ProductList.Title>Apple Watch 쇼핑하기</ProductList.Title>
      <ProductList.Frame>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map(({ name, price, image, _id }) => (
            <Product key={name}>
              <Product.ImageContainer src={image} id={_id} />
              <Product.Name>{name}</Product.Name>
              <Product.Price>{price}</Product.Price>
            </Product>
          ))
        )}
      </ProductList.Frame>
    </ProductList>
  );
}
