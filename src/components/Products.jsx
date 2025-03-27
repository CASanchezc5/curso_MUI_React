import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function Products() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://placehold.co/200" alt="mi imagen con styled" />
      <Box sx={{flexGrow:1, display:'grid', gap:3}}>
        <Typography variant="h2">Product Name</Typography>
        <Typography variant="body1" component='p'>Product Description</Typography>
        <Button variant="contained">Add Cart</Button>
      </Box>
      <Box sx={{mr:3}} component='p'>
        $19.99
      </Box>
    </Paper>
  );
}
