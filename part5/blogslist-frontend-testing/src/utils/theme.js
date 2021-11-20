import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { cyan, red } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6363ff",
    },
    secondary: {
      main: "#FB8B24",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

theme = responsiveFontSizes(theme);
export default theme;
