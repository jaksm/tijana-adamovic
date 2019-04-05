import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import theme from "../theme";

const CardWrapper = styled(Flex)`
  background-color: ${({ solid }) => (solid ? theme.color.white : theme.color.translucent)};
  position: relative;
  box-shadow: ${theme.shadow.right};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 5rem;
  padding-top: ${({ padding }) => (padding ? padding : "2rem")};
  padding-left: 50px;
  text-align: ${({ textAlign }) => textAlign};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: ${theme.breakpoint}) {
    padding: 3rem;
    height: ${({ height }) => (height ? height : "100%")};
  }
`;

const Card = props => {
  return (
    <CardWrapper {...props} full>
      {React.Children.map(props.children, child => (
        <FlexItem>{child}</FlexItem>
      ))}
    </CardWrapper>
  );
};

export default Card;
