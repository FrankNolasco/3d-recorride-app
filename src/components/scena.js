import React from "react";
import { Pannellum } from "pannellum-react";

export default function Scene({ img }) {
  return (
    <div>
      <Pannellum
        width={"100%"}
        height={"60vh"}
        title={"Interior auto"}
        image={img}
        pitch={-16.28}
        yaw={-1.66}
        hfov={130}
        autoLoad
        showControls={false}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        orientationOnByDefault={true}
        hotspotDebug={true}
      ></Pannellum>
    </div>
  );
}
