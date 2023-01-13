import React from "react";
import { ButtonStyled } from "./styled";

const Button = ({ status, onClick, children, ...rest }) => {
  return (
    <ButtonStyled status={status} onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
