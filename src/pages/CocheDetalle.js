import React, { useState } from "react";
import Button from "../components/atoms/Button";
import { Column, Div, Row, Typography } from "../components/core/overrides";
import CocheEnRotacion from "../components/molecules/CocheEnRotacion";
import Selector from "../components/molecules/Selector";
import Scene from "../components/scena";

const CocheDetalle = () => {
  const [idSeleccionado, setIdSeleccionado] = useState(1);
  return (
    <Div width="80%" margin="1em auto" addShadow padding="1em">
      <Row>
        <Selector
          options={[
            { id: 1, icon: "fa fa-car", name: "Exterior" },
            { id: 2, icon: "fa fa-car", name: "Interior" },
            { id: 3, icon: "fa fa-images", name: "Imagenes" },
            { id: 4, icon: "fa fa-photo-video", name: "Videos" },
          ]}
          value={idSeleccionado}
          onChange={(vl) => setIdSeleccionado(vl)}
        />
        <Div width="100%" style={{ height: "60vh" }}>
          {idSeleccionado === 1 && <CocheEnRotacion />}
          {idSeleccionado === 2 && <Scene />}
        </Div>
      </Row>
    </Div>
  );
};

export default CocheDetalle;
