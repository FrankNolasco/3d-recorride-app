import React, { useEffect, useState } from "react";
import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
import { Column, Div, Heading, Row, Typography } from "../../core/overrides";

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
  if (isTableOrMobile) return "100%";
  if (isDesktopMedium) return "60%";
  return "60%";
};

const CocheEnRotacion = ({ colors }) => {
  const [Index, setIndex] = useState(1);
  const [colorSelector, setColorSelector] = useState(colors[0]);
  const { isTabletOrMobile, isDesktopMedium } = useMediaQueryCustom();

  useEffect(() => {
    rotateAuto(1);

    return () => {};
  }, []);

  function rotateAuto(index) {
    // get image element
    // set image source
    setIndex(index);
    // increment index
    index--;
    // if index is greater than images length then set index to 0
    if (index <= 1) {
      index = 36;
    }
    // call rotateAuto function after 2 seconds
    setTimeout(function () {
      rotateAuto(index);
    }, 400);
  }
  return (
    <Column alignItems="center">
      <img
        id="imagen"
        src={colorSelector?.baseUrl + "angle" + Index + ".webp"}
        width={getWidth(isTabletOrMobile, isDesktopMedium)}
        alt="auto en rotacion"
      />
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
