import React from "react";
import {
  Column,
  Div,
  Grid,
  Heading,
  Row,
  Typography,
} from "../components/core/overrides";
import CocheCard from "../components/molecules/Coche";

const ListaCoches = () => {
  return (
    <Div width={"80%"} margin="1em auto">
      <Column>
        <Heading variant="h4">Select Model</Heading>
        <Row gap="10px">
          <input type={"radio"} />
          <Typography>Todos los vehiculos</Typography>
          <Typography>SUV</Typography>
          <Typography>Hatchback</Typography>
          <Typography>Coupe</Typography>
        </Row>
      </Column>
      <Grid cols={1} gap=".5em">
        <CocheCard />
        <CocheCard />
        <CocheCard />
        <CocheCard />
        <CocheCard />
        <CocheCard />
        <CocheCard />
      </Grid>
    </Div>
  );
};

export default ListaCoches;
