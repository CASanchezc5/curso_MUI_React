import { Container, Grid } from "@mui/material";

export default function GridComp() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}  md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            non? Sint animi aperiam eaque iste nam laborum sit, sapiente
            assumenda. Fugiat, commodi iure amet placeat nemo perferendis
            dignissimos id sapiente?
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            non? Sint animi aperiam eaque iste nam laborum sit, sapiente
            assumenda. Fugiat, commodi iure amet placeat nemo perferendis
            dignissimos id sapiente?
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            non? Sint animi aperiam eaque iste nam laborum sit, sapiente
            assumenda. Fugiat, commodi iure amet placeat nemo perferendis
            dignissimos id sapiente?
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
