import React from "react";

import { Column, Heading, Typography } from "../../core/overrides";
import { CocheCardStyled } from "./styled";
const CocheCard = ({ name, img, onClick }) => {
  return (
    <CocheCardStyled onClick={onClick}>
      <Column gap=".5em" alignItems="center">
        <img src={img} style={{ width: "100%" }} alt="4 runner angular-left" />
        <Heading variant="h3" color="inherit">
          {name}
        </Heading>
      </Column>
    </CocheCardStyled>
  );
};

export default CocheCard;
