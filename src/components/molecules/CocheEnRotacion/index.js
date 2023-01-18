import React, { useCallback, useEffect, useState } from "react";
import useLoaderImagesArray from "../../../hooks/useLoaderImagesArray";
import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
import useMousePosition from "../../../hooks/useMousePosition";
import { Column, Div, Heading, Row, Typography } from "../../core/overrides";
import CanvasImage from "./CanvasImage";

const getWidthItemColor = (isTableOrMobile, isDesktopMedium) => {
  if (isTableOrMobile) return "40px";
  if (isDesktopMedium) return "45px";
  return "55px";
};

const ItemColor = ({ color, name, onClick, active }) => {
  const { isTabletOrMobile, isDesktopMedium } = useMediaQueryCustom();

  return (
    <Div style={{ maxWidth: "60px" }} onClick={onClick}>
      <Column gap="5px">
        <Div
          style={{
            backgroundColor: color,
            width: getWidthItemColor(isTabletOrMobile, isDesktopMedium),
            height: getWidthItemColor(isTabletOrMobile, isDesktopMedium),
            borderRadius: ".5em",
            border: `solid 3px ${active ? "red" : "#e3e3e3"}`,
            cursor: "pointer",
          }}
        ></Div>
        <hr />
        <Typography style={{ fontSize: "10px" }} variant="label">
          {name}
        </Typography>
      </Column>
    </Div>
  );
};

const getWidth = (isTableOrMobile, isDesktopMedium) => {
  if (isTableOrMobile) return "350px";
  if (isDesktopMedium) return "600px";
  return "900px";
};

const getHeight = (isTableOrMobile, isDesktopMedium) => {
  if (isTableOrMobile) return "225px";
  if (isDesktopMedium) return "400px";
  return "700px";
};

const CocheEnRotacion = ({ colors }) => {
  const [Index, setIndex] = useState(1);
  const [canvasContext, setCanvasContext] = useState(null);
  const [images, loadImages] = useLoaderImagesArray();

  const [refresh, setRefresh] = useState(false);

  const { movementX } = useMousePosition();
  const [isMousePress, setIsMousePress] = useState(false);

  const [colorSelector, setColorSelector] = useState(colors[0]);
  const { isTabletOrMobile, isDesktopMedium } = useMediaQueryCustom();

  useEffect(() => {
    if (colorSelector) {
      loadImages(
        colorSelector.baseUrl + colorSelector.prefix,
        colorSelector.size,
        colorSelector.suffix
      );
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelector]);

  useEffect(() => {
    if (isMousePress) {
      // pintar imagen
      let nextValue;
      if (movementX > 0) {
        nextValue = Index - 1;
      } else {
        nextValue = Index + 1;
      }
      if (nextValue >= colorSelector.size) {
        setIndex(1);
      } else {
        const _ = nextValue < 1 ? colorSelector.size : nextValue;
        console.log("_", _);
        setIndex(_);
      }
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movementX, isMousePress]);

  useEffect(() => {
    if (canvasContext) {
      if (Index < images.length) {
        canvasContext.clearRect(
          0,
          0,
          canvasContext.canvas.width,
          canvasContext.canvas.height
        );
        canvasContext.drawImage(
          images[Index],
          0,
          0,
          canvasContext.canvas.width,
          canvasContext.canvas.height
        );
        if (!isMousePress && Index < images.length) {
          const interval = setInterval(() => {
            if (Index < images.length) {
              setIndex(Index + 1);
            } else {
              setIndex(1);
            }
          }, 40);
          return () => clearInterval(interval);
        }
      } else {
        setIndex(1);
      }
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasContext, images, isMousePress, Index, images.size, refresh]);

  // refresh
  useEffect(() => {
    // generar una taza de refresco
    const interval = setInterval(() => {
      if (Index !== 1) {
        return;
      }
      setRefresh(!refresh);
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <Column
      alignItems="center"
      justifyContent="space-between"
      style={{
        // backgroundColor: "#e3e3e3",
        // height: "calc(100vh - 70px)",
        padding: "1em",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: getWidth(isTabletOrMobile, isDesktopMedium),
          height: getHeight(isTabletOrMobile, isDesktopMedium),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.length === colorSelector?.size + 1 ? (
          <CanvasImage
            width={getWidth(isTabletOrMobile, isDesktopMedium)}
            height={getHeight(isTabletOrMobile, isDesktopMedium)}
            onLoadContext={(ctx) => setCanvasContext(ctx)}
            onMouseDown={() => {
              setIsMousePress(true);
            }}
            onMouseUp={() => {
              setIsMousePress(false);
            }}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Typography>Cargando...</Typography>
        )}
      </div>
      <Column
        style={{
          border: "solid 1px #c3c3c3",
          padding: ".5em 2em",
          borderRadius: ".25em",
        }}
        gap="10px"
      >
        <Heading variant="h4">Selector de colores</Heading>
        <Row gap="20px" alignItems="baseline">
          {colors.map((color) => (
            <ItemColor
              color={color.color}
              name={color.name}
              onClick={() => {
                setRefresh(!refresh);
                setIndex(1);
                setColorSelector(color);
              }}
              active={colorSelector?.name === color.name}
            />
          ))}
        </Row>
      </Column>
    </Column>
  );
};

export default CocheEnRotacion;
