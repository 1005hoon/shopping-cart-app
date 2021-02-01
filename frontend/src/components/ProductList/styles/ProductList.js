import styled from "styled-components/macro";

export const Container = styled.div`
  width: 80%;
  max-width: 1100px;
  height: 35%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 0.5rem;
`;
