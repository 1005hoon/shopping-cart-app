import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    margin: 5rem 0;
    box-sizing: border-box;
  }
`;
