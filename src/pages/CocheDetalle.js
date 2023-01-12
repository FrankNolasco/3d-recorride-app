import React, { useEffect, useState } from "react";
import { Div } from "../components/core/overrides";
const imagenBase =
  "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyotarav4limitedsu5fa/22toyotarav4limitedsu5fa_animations/_360color/_660x440/blizzard-pearl/";
const CocheDetalle = () => {
  const [imgDinamyc, setimgDinamyc] = useState(imagenBase);
  useEffect(() => {
    rotateAuto(1);

    return () => {};
  }, []);

  function rotateAuto(index) {
    // get image element
    // set image source
    setimgDinamyc(imagenBase + "angle" + index + ".webp");
    // increment index
    index--;
    // if index is greater than images length then set index to 0
    if (index <= 1) {
      index = 36;
    }
    // call rotateAuto function after 2 seconds
    setTimeout(function () {
      rotateAuto(index);
    }, 500);
  }

  return (
    <Div width="80%" margin="1em auto" addShadow>
      <img id="imagen" src={imgDinamyc} alt="auto en rotacion" />
    </Div>
  );
};

export default CocheDetalle;
