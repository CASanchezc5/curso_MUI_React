import { Box, Button, Container, Typography } from "@mui/material"; // o tambien se puede asi: import Button from "@mui/material/Button";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Products from "./components/Products";
import CardComp from "./components/CardComp";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <AppRegistrationIcon />,
  },
];


export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <h1>App</h1>
        <Box
          sx={{
            border: 2,
            p: 5,
            borderColor: "peru",
            bgcolor: "#111",
            color: "white",
          }}
        >
          Pero que hermoso es MUI
        </Box>
        <Typography variant="h3" component="h3" color="primary">
          Titulo con h3
        </Typography>
        <Typography variant="h1" component="spam">Titulo 2</Typography>
      <Typography variant="body1" textAlign="center" mt={10}>Titulo 3</Typography>
        <Button
          variant="contained"
          sx={{ m: 5 }}
          endIcon={<LocalGroceryStoreIcon />}
        >
          {" "}
          Mi Botón
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 5 }}
          color="error"
          startIcon={<CleanHandsIcon />}
        >
          {" "}
          Mi Botón de Error
        </Button>
        <Products />
        <br />
        <CardComp /> */}

        
      </Container>
    </>
  );
}
