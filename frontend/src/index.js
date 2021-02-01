import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-style";
import App from "./components/App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector("#root")
);
