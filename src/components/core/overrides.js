import styled from "styled-components";

export const Div = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border: ${(props) => (props.border ? props.border : "0")};
  ${(props) => {
    return (
      props.addShadow &&
      `box-shadow: 0px 2px 16px 3px rgba(85,109,235,0.29);
      -webkit-box-shadow: 0px 2px 16px 3px rgba(85,109,235,0.29);
      -moz-box-shadow: 0px 2px 16px 3px rgba(85,109,235,0.29);`
    );
  }}

  @media (max-width: 768px) {
    width: ${(props) => (props.responsive ? "100%" : props.width)};
  }
`;

export const ResizeTypography = styled.div`
  * {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  }
`;

const sizes = {
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 15,
  h5: 10,
  h6: 8,
  span: 14,
  p: 14,
  label: 12,
};

const sizesResponsive = {
  h1: 15,
  h2: 11,
  h3: 9,
  h4: 8,
  h5: 5,
  h6: 4,
  span: 7,
  p: 7.5,
  label: 6,
};

const calcularFontSize = (variant, responsive) => {
  let size = 14;

  const sizeVariant = responsive ? sizesResponsive : sizes;

  variant && (size = sizeVariant[variant] ? sizeVariant[variant] : 14);
  return `${size}px`;
};

export const Heading = styled.h1`
  font-weight: bold;
  font-size: ${(props) => calcularFontSize(props.variant)};
  font-family: ${(props) => (props.secondary ? props.secondary : "Roboto")};
  color: ${(props) => props.colors?.text};
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  margin-bottom: 0;
`;

export const Typography = styled.span`
  color: ${(props) => (props.color ? props.color : props.colors?.text)};
  font-family: ${(props) => (props.secondary ? props.secondary : "Roboto")};
  font-size: ${(props) => calcularFontSize(props.variant)};
  font-weigth: ${(props) => (props.fw ? props.fw : "normal")};
  /*
    font-size responsive
   */
  @media (max-width: 768px) {
    font-size: ${(props) =>
      calcularFontSize(props.variant ? props.variant : "span")};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.colors.text};
  font-family: ${(props) => props.fonts.fontFamily};
  font-size: 14px;
`;

export const Grid = styled(Div)`
  display: grid;
  grid-gap: ${(props) => (props.gap ? props.gap : 0)};
  grid-template-columns: ${(props) =>
    `repeat(${props.cols ? props.cols : "auto-fill"},1fr)`};
  /* @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  } */
`;

export const GridChild = styled(Div)`
  grid-column: ${(props) =>
    props.spanCol ? props.spanCol : `span ${props.span}`};
  grid-row: ${(props) => (props.spanRow ? `${props.spanRow}` : "auto")};
`;

export const Flex = styled(Div)`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "inherit"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "inherit")};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "inherit")};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  * {
    flex-grow: ${(props) => (props.grow ? 1 : 0)};
  }
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.responsiveReorder ? "column" : "row")};
  }
`;
export const Column = styled(Flex)`
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.responsiveReorder ? "row" : "column")};
  }
`;

export const Row = styled(Flex)`
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "inherit"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "inherit")};
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.responsiveReorder ? "column" : "row")};
  }
`;

export const RowWrap = styled(Row)`
  flex-wrap: wrap;
`;

export const SelectorDisplays = ({
  type,
  gap = "10px",
  cols = 2,
  children,
  rest,
}) => {
  switch (type) {
    case "grid":
      return (
        <Grid gap={gap} cols={cols} {...rest}>
          {children}
        </Grid>
      );

    case "flex":
      return (
        <Flex responsiveReorder gap={gap} {...rest}>
          {children}
        </Flex>
      );

    case "column":
      return (
        <Column responsiveReorder gap={gap} {...rest}>
          {children}
        </Column>
      );

    case "row":
      return (
        <Row responsiveReorder gap={gap} {...rest}>
          {children}
        </Row>
      );
    case "row-wrap":
      return (
        <RowWrap responsiveReorder gap={gap} {...rest}>
          {children}
        </RowWrap>
      );
    default:
      return (
        <Row responsiveReorder gap={gap} {...rest}>
          {children}
        </Row>
      );
  }
};
