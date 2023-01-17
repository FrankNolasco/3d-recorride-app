import React, { useEffect, useRef, useState } from "react";

const CanvasImage = ({ onLoadContext, ...props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const _context = canvas.getContext("2d");
    onLoadContext(_context);
    return () => {};
  }, []);

  return <canvas ref={canvasRef} {...props}></canvas>;
};

export default CanvasImage;
