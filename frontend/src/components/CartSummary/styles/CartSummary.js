import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
  margin-top: 4rem;
  border-top: 3px solid black;
  height: 280px;
  background: #e9e9e9;
  padding: 0 2rem;

  @media screen and (min-width: 360px) {
    width: 100%;
  }
`;
export const ListGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;

  &:nth-child(3) {
    border: none;
  }
`;
export const ListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ItemText = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
`;
export const ItemCost = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
`;

export const SummaryTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${ItemText} {
    margin: 1rem 0 0.25rem;
    font-size: 0.7rem;
  }

  ${ItemCost} {
    margin: 0.2rem 0 1.5rem;
    font-size: 1.2rem;
    color: #cd0c22;
  }
`;

export const CheckoutButton = styled.button`
  @keyframes spinner {
    from {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transform: rotateX(0) rotateY(-360deg);
    }

    to {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transform: rotateX(360deg) rotateY(-360deg);
    }
  }
  display: block;
  width: 100%;
  padding: 15px;
  background: #cd0c22;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  outline: 0;
  transition: all 0.1s ease-in-out;

  &:before {
    content: attr(data-content-default);
  }

  &:active {
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    animation: spinner 200ms infinite linear;

    &:before {
      content: attr(data-content-spinning);
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: none;
    outline: 0;
  }
`;
