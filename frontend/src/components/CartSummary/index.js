import React from "react";
import {
  Container,
  ListGroup,
  ListItem,
  ItemText,
  ItemCost,
  SummaryTotal,
  CheckoutButton,
} from "./styles/CartSummary";
import { formatCurrency } from "../../utils/textFormatter";

export default function CartSummary({ children }) {
  return <Container>{children}</Container>;
}

CartSummary.ListGroup = function CartSummaryListGroup({ children }) {
  return <ListGroup>{children}</ListGroup>;
};

CartSummary.ListItem = function CartSummaryListItem({ text, cost }) {
  return (
    <ListItem>
      <ItemText>{text}</ItemText>
      <ItemCost>{formatCurrency(cost * 1)}원</ItemCost>
    </ListItem>
  );
};

CartSummary.SummaryTotal = function CartSummarySummaryTotal({ text, cost }) {
  return (
    <SummaryTotal>
      <ItemText>{text}</ItemText>
      <ItemCost>{formatCurrency(cost * 1)}원</ItemCost>
    </SummaryTotal>
  );
};

CartSummary.CheckoutButton = function CartSummaryCheckoutButton({
  count,
  children,
}) {
  return <CheckoutButton disabled={count <= 0}>{children}</CheckoutButton>;
};
