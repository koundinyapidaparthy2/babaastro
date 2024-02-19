import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#a98d4e",
    },
    background: {
      default: "#111827",
      type1: "#f3f4f6",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
