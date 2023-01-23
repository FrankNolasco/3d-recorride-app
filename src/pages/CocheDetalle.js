import React, { useState } from "react";
import { Div, Heading, Row, Typography } from "../components/core/overrides";
import CocheEnRotacion from "../components/molecules/CocheEnRotacion";
import ImagesCoches from "../components/molecules/ImagesCoches";
import VideoCoches from "../components/molecules/VideoCoches";
import Selector from "../components/molecules/Selector";
import Scene from "../components/scena";
import Button from "../components/atoms/Button";

const CocheDetalle = ({ value, onChange }) => {
  const [idSeleccionado, setIdSeleccionado] = useState(1);
  return (
    <Div width="100%" padding="1em" style={{ boxSizing: "border-box" }}>
      <Row gap="10px">
        <button
          onClick={onChange}
          style={{
            padding: "10px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <i className="fa fa-angle-left" style={{ fontSize: "20px" }} />
        </button>
        <Heading variant="h1">{value?.name}</Heading>
      </Row>
      <hr />
      <Row responsiveReorder gap="10px">
        <Selector
          options={[
            { id: 1, icon: "fa fa-car", name: "Exterior" },
            // { id: 2, icon: "fa fa-car", name: "Interior" },
            { id: 3, icon: "fa fa-images", name: "Imagenes" },
            { id: 4, icon: "fa fa-photo-video", name: "Videos" },
          ]}
          value={idSeleccionado}
          onChange={(vl) => setIdSeleccionado(vl)}
        />
        <Div width="100%" style={{ height: "70vh" }}>
          {idSeleccionado === 1 && <CocheEnRotacion colors={value?.colors} />}
          {/* {idSeleccionado === 2 && <Scene img={value?.interiorImg} />} */}
          {idSeleccionado === 3 && <ImagesCoches images={value?.images} />}
          {idSeleccionado === 4 && <VideoCoches video={value?.video} />}
        </Div>
      </Row>
    </Div>
  );
};

export default CocheDetalle;
