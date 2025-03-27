import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.jsx";
import GridComp from "./GridComp.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Products from "./components/Products.jsx";

import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001450",
    },
    secondary: {
      main: "#b500d6",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <App />
          <GridComp />
        </SnackbarProvider>
      </BrowserRouter>
      <CssBaseline />{" "}
      {/* corrige algunas inchorencias entre navegadores y dispositivos, como el font Roboto  */}
    </ThemeProvider>
  </StrictMode>
);
