import styled from "styled-components/macro";

export const Container = styled.div`
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
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
  padding: 18px;
  border-radius: 50%;
  border: none;
  background: url("../assets/btn_shopping_bag.png") center center/ 70% no-repeat,
    #696969;

  &:hover {
    cursor: pointer;
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
