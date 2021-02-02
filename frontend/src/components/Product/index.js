import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  ImageContainer,
  ShoppingCart,
  Name,
  Price,
} from "./styles/Product";
import { formatCurrency, formatName } from "../../utils/textFormatter";
import { addToCart } from "../../actions/cartAction";
export default function Product({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Product.ImageContainer = function ProductImageContainer({
  children,
  id,
  ...restProps
}) {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) =>
    state.productList.products.find((product) => product._id === id)
  );
  const addToCartHandler = () => {
    dispatch(addToCart(_id));
  };
  return (
    <ImageContainer {...restProps}>
      <ShoppingCart onClick={addToCartHandler} />
    </ImageContainer>
  );
};

Product.Name = function ProductName({ children, ...restProps }) {
  return <Name {...restProps}>{formatName(children)}</Name>;
};

Product.Price = function ProductPrice({ children, ...restProps }) {
  return <Price {...restProps}>{formatCurrency(children)} 원</Price>;
};
