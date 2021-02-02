import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  CartBody,
  ImageContainer,
  RemoveButton,
  BtnMinus,
  BtnPlus,
  QuantityContainer,
  BtnWrapper,
} from "./styles/ShoppingCart";
import { removeFromCart, increment, decrement } from "../../actions/cartAction";
import { formatCurrency, formatName } from "../../utils/textFormatter";

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

ShoppingCart.CartList = function ShoppingCartCartList({ children }) {
  return <CartList>{children}</CartList>;
};

ShoppingCart.CartHeader = function ShoppingCartCartHeader() {
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

ShoppingCart.CartBody = function ShoppingCartCartBody({ id }) {
  const dispatch = useDispatch();
  const { product, name, image, price, quantity } = useSelector((state) =>
    state.cart.cartItems.find((item) => item.product === id)
  );
  const removeHandler = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <CartBody>
      <ImageSection>
        <ImageContainer src={image} />
      </ImageSection>
      <NameSection>{formatName(name)}</NameSection>
      <QuantitySection>
        <BtnWrapper>
          <BtnMinus
            disabled={quantity <= 0}
            onClick={() => dispatch(decrement(product))}
          />
          <QuantityContainer value={quantity} />
          <BtnPlus onClick={() => dispatch(increment(product))} />
        </BtnWrapper>
      </QuantitySection>
      <PriceSection>{formatCurrency(price)}원</PriceSection>
      <RemoveSection>
        <RemoveButton onClick={() => removeHandler(product)} />
      </RemoveSection>
    </CartBody>
  );
};

ShoppingCart.SummaryContainer = function ShoppingCartSummaryContainer({
  children,
  ...restProps
}) {
  return <SummaryContainer>{children}</SummaryContainer>;
};
