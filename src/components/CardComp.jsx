import { Scale } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardComp() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://placehold.co/1000x200"
          height="200"
          alt="descripcion imagen"
        />
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit iure
            iste eos facere! Velit nobis non vero excepturi laudantium numquam
            quo quod, consequatur totam dicta voluptates? Natus commodi esse
            aliquid!
          </Typography>
        </CardContent>
      </CardActionArea>{" "}
      {/*le da un efecto touch al hacer clic*/}
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
}
