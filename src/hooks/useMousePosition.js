import React from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
  });

  const updateMousePosition = (ev) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
      movementX: ev.movementX,
      movementY: ev.movementY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
