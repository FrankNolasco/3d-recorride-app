import React from "react";
import CocheImg from "../../../images/4runner_angularleft.webp";
import { Column, Heading, Typography } from "../../core/overrides";
import { CocheCardStyled } from "./styled";
const CocheCard = () => {
  return (
    <CocheCardStyled>
      <Column gap=".5em">
        <img src={CocheImg} alt="4 runner angular-left" />
        <Heading variant="h3" color="inherit">
          4Runner
        </Heading>
      </Column>
    </CocheCardStyled>
  );
};

export default CocheCard;
