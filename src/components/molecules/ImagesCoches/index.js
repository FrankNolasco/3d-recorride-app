import React, { useState } from "react";
import { useMediaQueryCustom } from "../../../hooks/useMediaQueryCustom";
import Button from "../../atoms/Button";
import { Column, Div, Grid, Row } from "../../core/overrides";
// import { Images } from "./data";

const getWidth = (isTableOrMobile, isDesktopMedium) => {
  if (isTableOrMobile) return "100%";
  if (isDesktopMedium) return "60%";
  return "60%";
};

const getCols = (isTableOrMobile, isDesktopMedium) => {
  if (isTableOrMobile) return 3;
  if (isDesktopMedium) return 2;
  return 2;
};

const ImagesCoches = ({ images }) => {
  const { isTabletOrMobile, isDesktopMedium } = useMediaQueryCustom();
  const [img, setImg] = useState(images[0]);
  const [typeActive, setTypeActive] = useState("Exterior");

  return (
    <div>
      <Row responsiveReorder gap="20px">
        <Row width={"100%"}>
          <img
            src={img?.image}
            style={{
              width: getWidth(isTabletOrMobile, isDesktopMedium),
              margin: "0 auto",
            }}
            alt="..."
          />
        </Row>
        <Column width={isTabletOrMobile ? "100%" : "40%"} gap="15px">
          <Row gap="10px">
            <Button
              status={typeActive === "Exterior"}
              onClick={() => setTypeActive("Exterior")}
            >
              Exterior
            </Button>
            <Button
              status={typeActive === "Interior"}
              onClick={() => setTypeActive("Interior")}
            >
              Interior
            </Button>
          </Row>
          <Grid cols={getCols(isTabletOrMobile, isDesktopMedium)} gap="10px">
            {images
              .filter((_) => _.type === typeActive)
              .map((_img) => (
                <div
                  style={{
                    width: "100%",
                    padding: "5px 0",
                    border: `1px solid ${img.id === _img.id ? "#000" : "#ccc"}`,
                  }}
                >
                  <img
                    src={_img.image}
                    style={{
                      width: "90%",
                      margin: "0 auto",
                    }}
                    alt="..."
                    onClick={() => setImg(_img)}
                  />
                </div>
              ))}
          </Grid>
        </Column>
      </Row>
    </div>
  );
};

export default ImagesCoches;
