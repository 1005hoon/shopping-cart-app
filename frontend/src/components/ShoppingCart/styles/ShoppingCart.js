import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;

  @media only screen and (min-width: 360px) {
    width: 80%;
    max-width: 1100px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 75% 22.5%;
    grid-gap: 1.6rem;
  }
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
  display: none;

  @media only screen and (min-width: 360px) {
    border: 1px solid pink;
    border-bottom: 1px solid #e0e0e0;
    height: 50px;
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;

  @media only screen and (min-width: 360px) {
    height: 100%;
    width: 20%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  background: url(${({ src }) =>
      src ? `../assets/${src}` : "../assets/watch_1.png"})
    center center/ contain no-repeat;

  @media only screen and (min-width: 360px) {
    width: 70%;
    margin: 1rem 0;
    padding: 15px 0;
  }
`;

export const NameSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 360px) {
    width: 40%;
  }
`;

export const QuantitySection = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 360px) {
    width: 20%;
  }
`;
export const BtnWrapper = styled.div`
  margin: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 360px) {
    width: 100%;
  }
`;

export const BtnMinus = styled.input.attrs({
  type: "button",
})`
  width: 33%;
  height: 100%;
  border: none;
  background: url("../assets/btn_min.png") center center/ 50% no-repeat;
  transition: all 0.1s ease-in-out;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  &:active {
    border: none;
    outline: 0;
    background-color: #e4e4e4;
  }
`;
export const BtnPlus = styled.input.attrs({
  type: "button",
})`
  width: 33%;
  height: 100%;
  border: none;
  background: url("../assets/btn_plus.png") center center/ 50% no-repeat;

  transition: all 0.1s ease-in-out;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  &:active {
    border: none;
    outline: 0;
    background-color: #e4e4e4;
  }
`;
export const QuantityContainer = styled.input`
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  outline: none;

  &:active {
    border: none;
    outline: 0;
  }
`;

export const PriceSection = styled.div`
  height: 100%;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const RemoveSection = styled.div`
  height: 100%;
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 360px) {
    width: 10%;
  }
`;

export const RemoveButton = styled.button`
  width: 100%;
  padding: 15px 100px;
  margin: 1rem;
  background: url("../assets/btn_delete.png") center center/ contain no-repeat;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  outline: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #e6e6e6;
  }

  @media only screen and (min-width: 360px) {
    padding: 20px;
    background-size: 40%;
  }
`;
export const CartBody = styled.div`
  display: flex;
  height: 400px;
  border-bottom: 1px solid #e0e0e0;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 600;
  box-sizing: border-box;
  align-items: center;

  @media only screen and (min-width: 360px) {
    flex-direction: row;
    height: 150px;

    ${NameSection} {
      justify-content: flex-start;
      text-align: left;
      margin-left: 50px;
      margin-right: -50px;
    }
  }
`;
