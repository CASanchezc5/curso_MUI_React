import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>This is a success Alert.
        </Alert>
        {/* <Alert
          severity="info"
          action={
            <>
              <Button color="inherit">Ver mas</Button>
              <Button color="inherit">Delete</Button>
            </>
          }
        >
          This is an info Alert.
        </Alert>
        <Alert severity="warning" icon={<GppMaybeIcon />} variant="outlined">This is a warning Alert.</Alert>

        <Collapse in={open}>
          <Alert severity="error" onClose={() => {setOpen(false)}}>
            This is an error Alert.
          </Alert>
        </Collapse> */}

        <Button variant="contained" onClick={()=> setOpen(true)}>Open</Button>

        <Snackbar open={open} autoHideDuration={1000} onClose={()=> setOpen(false)}>
          <Alert severity="error">This is an error Alert. whit Snackbar</Alert>
        </Snackbar>
      </Box>
    </>
  );
}
