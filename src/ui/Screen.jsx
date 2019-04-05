// @ts-check
import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "styled-grid-component";
import theme from "../theme";

const ScreenWrapper = styled(Grid)`
  padding: 20px;
  box-sizing: border-box;
  min-height: ${({ fillHeight }) => (fillHeight ? "calc(100vh - 40px)" : null)};
  grid-template-columns: ${({ templateColumns, cols }) => templateColumns || `repeat(${cols}, 1fr)`};

  @media screen and (max-width: ${theme.breakpoint}) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const Screen = props => {
  const cols = props.cols || 3;
  return (
    <ScreenWrapper
      templateColumns={props.templateColumns || `repeat(${cols}, 1fr)`}
      gap="20px"
      width="100%"
      height={props.fillHeight ? "calc(100vh - 40px)" : null}
      autoRows="minmax(480px, auto)"
    >
      {React.Children.map(props.children, child => {
        return <GridItem>{child}</GridItem>;
      })}
    </ScreenWrapper>
  );
};

export default Screen;
