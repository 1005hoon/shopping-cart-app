import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 70%;
  background: url(${({ src }) =>
      src ? `../assets/${src}` : "../assets/watch_1.png"})
    center center/ 80% no-repeat;
  position: relative;
  border: 1px solid #e6e6e6;
`;

export const ShoppingCart = styled.button`
  position: absolute;
  bottom: 5%;
  right: 7%;
  padding: 16px;
  border-radius: 50%;
  border: none;

  outline: 0;
  /* 왜이렇게 blurry 한거죠 .. */
  background: url("../assets/btn_shopping_bag.png") center center/ 67% no-repeat,
    #696969;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
  }

  &:active {
    border: none;
    outline: 0;

    background-color: #f3f3f3;
  }
`;

export const Name = styled.p`
  padding: 0;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  line-height: 1.2;
`;
export const Price = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 800;
  font-size: 0.8rem;
  display: inline-block;
`;
