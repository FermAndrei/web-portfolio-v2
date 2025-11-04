import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#34d399",
      dark: "#047857",
      light: "#6ee7b7",
      contrastText: "#ffffff",
    },
    background: {
      default: "#020617",
      paper: "#1e293b",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cbd5e1",
      disabled: "#94a3b8",
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, sans-serif",
    h6: { fontWeight: 600 },
    body1: { color: "#cbd5e1" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e293b",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
