import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/roboto";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./utils/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
