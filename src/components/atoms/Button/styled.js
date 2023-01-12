import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: solid 1px ${({ status }) => (status ? "white" : "red")};
  padding: 1em;
  border-radius: 0.25em;
  background-color: ${({ status }) => (status ? "red" : "white")};
  color: ${({ status }) => (status ? "white" : "red")};
  width: 100%;
  cursor: pointer;
`;
