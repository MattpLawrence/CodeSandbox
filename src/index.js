import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// add bootstrap styling
import "bootstrap/dist/css/bootstrap.css";
// add bootstrap collapse functionality
import "bootstrap/js/dist/collapse";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
