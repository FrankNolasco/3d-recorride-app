import React from "react";
// import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
// const getWidth = (isTableOrMobile, isDesktopMedium) => {
//   if (isTableOrMobile) return "400px";
//   if (isDesktopMedium) return "900px";
//   return "1240px";
// };

// const getHeight = (isTableOrMobile, isDesktopMedium) => {
//   if (isTableOrMobile) return "225px";
//   if (isDesktopMedium) return "400px";
//   return "700px";
// };
const VideoCoches = ({ video }) => {
  // return <video src={video} width="100%" height="100%" controls />;
  // const { isTabletOrMobile, isDesktopMedium } = useMediaQueryCustom();
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/dqln-BRx1Rw"
      title="Citroën C3 | Primer Contacto / Test / Review en español | coches.net"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      style={{ alignSelf: "center" }}
    ></iframe>
  );
};

export default VideoCoches;
