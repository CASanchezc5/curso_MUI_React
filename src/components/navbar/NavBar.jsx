import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

import { NavLink } from "react-router-dom";

export default function NavBar({ navArrayLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ display: { sx: "flex", sm: "none" } }}
            color="inherit"
            size="large"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          {/* <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>{" "}
        {/*Toolbar -> Este componente trabaja con flexbox */}
      </AppBar>
      {/* <Button variant="contained">Open Drawer</Button> */}

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        {/* El anchor -> hace que me aprezca en el lado que yo desee, onClose -> es para cerrarlo  */}
        <NavListDrawer
          NavLink={NavLink}
          navArrayLinks={navArrayLinks}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
