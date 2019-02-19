import React from "react";
import styled from "styled-components";
import theme from "../theme";
import Flex, { FlexItem } from "styled-flex-component";

const RectangleWrapper = styled.div`
  background-color: ${theme.color.translucent};
  box-shadow: ${theme.shadow.right};
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 500px;
  height: 100vh;
  @media screen and (max-width: ${theme.breakpoint}) {
    width: 100vw;
    box-shadow: none;
  }
`;

const RectangleContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  @media screen and (max-width: ${theme.breakpoint}) {
    width: 65%;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
  }
`;

const Rectangle = ({ children }) => {
  return (
    <RectangleWrapper>
      <RectangleContent>
        <Flex full column justifyCenter>
          {React.Children.map(children, child => (
            <FlexItem>{child}</FlexItem>
          ))}
        </Flex>
      </RectangleContent>
    </RectangleWrapper>
  );
};

export default Rectangle;
