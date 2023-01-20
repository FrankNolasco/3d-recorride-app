import React, { useEffect, useState } from "react";
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

import { useMediaQueryCustom } from "../hooks/useMediaQueryCustom";
import axios from "axios";

const ListaCoches = ({ onClick, onChange }) => {
  const [_model, setModel] = useState({ id: 1, name: "Todos" });
  const { isTabletOrMobile } = useMediaQueryCustom();

  const [ListaCoches, setListaCoches] = useState([]);
  const [Modelo, setModelo] = useState([]);

  const getData = (file, setData) => {
    axios
      .get(
        "https://alfaromeoalcala.com/coches-plugin/datos/getData.php?fileName=" +
          file,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(setData)
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (ListaCoches.length > 0) {
      const id = getParams();
      if (id) {
        const coche = ListaCoches.find((el) => el.id === parseInt(id));
        if (coche) onChange(coche);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ListaCoches]);

  // function get params my url
  const getParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("id");
    return myParam;
  };

  useEffect(() => {
    getData("datos", ({ data }) => {
      setListaCoches(data);
    });
    getData("modelos", ({ data }) => {
      setModelo(data);
    });
    return () => {};
  }, []);

  return (
    <Div width={"80%"} margin="1em auto">
      {Modelo.length > 0 && (
        <Column>
          <Heading variant="h4">Select Model</Heading>
          <Row gap="10px" padding="10px 0" style={{ overflowX: "auto" }}>
            {Modelo.map((model) => (
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
      )}
      {ListaCoches.length > 0 && (
        <Grid
          cols={isTabletOrMobile ? 1 : 3}
          style={{ width: "100%" }}
          gap=".5em"
        >
          {ListaCoches.filter(
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
      )}
    </Div>
  );
};

export default ListaCoches;
