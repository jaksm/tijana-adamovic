// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import estaImage from "../assets/esta.jpg";
import Card from "../components/Card";
import { esta } from "../data";
import theme from "../theme";
import Screen from "../ui/Screen";
import Title from "../ui/Title";

const ButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: ${theme.shadow.base};
  font-size: ${theme.font.size.sm};
  padding: 1.25em;
  box-sizing: border-box;
  margin: 0.5rem 0;
  background-color: ${({ background }) => (background ? background : theme.color.green)};
  color: ${({ color }) => (color ? color : theme.color.white)};
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ background }) => (background ? background : theme.color.grey)};
  }
`;

const Esta = () => {
  return (
    <div>
      <Screen fillHeight templateColumns="1fr 2fr">
        <Card backgroundImage={estaImage} />
        <Card column center solid>
          <Title>{esta.title}</Title>
          <div style={{ maxHeight: "500px", overflowY: "auto", margin: "3rem 0" }}>{esta.text}</div>
          <ButtonLink to="/upitnik">Popunite Upitnik</ButtonLink>
        </Card>
      </Screen>
    </div>
  );
};

export default Esta;
