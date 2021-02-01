import styled from "styled-components/macro";

export const Container = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 75% 22.5%;
  grid-gap: 1.6rem;
`;

export const CartContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const CartList = styled.div`
  border-top: 3px solid black;
`;

export const SummaryContainer = styled.div`
  width: 100%;
`;

export const CartHeader = styled.div`
  border: 1px solid black;
  height: 60px;
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ImageSection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 2;
`;

export const NameSection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 4;
  align-items: center;
  justify-content: center;
`;

export const QuantitySection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
`;

export const PriceSection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
`;

export const RemoveSection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
