import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif", // Use Tailwind's font family
  },
  palette: {
    primary: {
      main: "#1d4ed8", // Tailwind's blue-600
    },
    secondary: {
      main: "#9333ea", // Tailwind's purple-600
    },
  },
});

export default theme;
