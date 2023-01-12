import React from "react";
import { ButtonStyled } from "./styled";

const Button = ({ status, onClick, children }) => {
  return (
    <ButtonStyled status={status} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
