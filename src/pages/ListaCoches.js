import React, { useState } from "react";
import {
  Column,
  Div,
  Grid,
  Heading,
  Row,
  Typography,
} from "../components/core/overrides";
import Button from "../components/atoms/Button";
import CocheCard from "../components/molecules/Coche";
import { ListCoches, Models } from "../helpers/listCochesData";

const ListaCoches = ({ onClick, onChange }) => {
  const [_model, setModel] = useState(Models[0]);

  return (
    <Div width={"80%"} margin="1em auto">
      <Column>
        <Heading variant="h4">Select Model</Heading>
        <Row gap="10px" padding="10px 0" style={{ overflowX: "auto" }}>
          {Models.map((model) => (
            <Button
              status={_model.id === model.id}
              onClick={() => setModel(model)}
              style={{ padding: ".5em" }}
            >
              <Typography color="inherit">{model.name}</Typography>
            </Button>
          ))}
        </Row>
      </Column>
      <Grid cols={3} style={{ width: "100%" }} gap=".5em">
        {ListCoches.filter(
          (el) => _model?.id === 1 || el.model === _model?.id
        ).map((coche) => {
          return (
            <CocheCard
              key={coche.id}
              name={coche.name}
              img={coche.img}
              model={coche.model}
              onClick={() => onChange(coche)}
            />
          );
        })}
      </Grid>
    </Div>
  );
};

export default ListaCoches;
