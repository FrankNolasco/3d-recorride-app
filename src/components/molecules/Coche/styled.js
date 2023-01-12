import styled from "styled-components";
import { Div } from "../../core/overrides";

export const CocheCardStyled = styled(Div)`
  border: solid 1px #e3e3e3;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  transition: all 0.1s;
  cursor: pointer;

  img {
    transition: all 0.1s;

    border-bottom: solid 8px #fff;
  }
  :hover {
    color: red;
    border-color: red;
    img {
      border-color: red;
    }
  }
`;
