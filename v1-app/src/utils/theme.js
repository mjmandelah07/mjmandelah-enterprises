import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,  // Set md to 768px
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
