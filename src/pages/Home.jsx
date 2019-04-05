// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import passportImage from "../assets/passport.jpeg";
import Card from "../components/Card";
import SocialIcon from "../components/SocialIcons";
import { about, general } from "../data";
import theme from "../theme";
import Screen from "../ui/Screen";
import Text from "../ui/Text";
import Title from "../ui/Title";

const ButtonLink = styled(Link)`
  position: absolute;
  bottom: 50px;
  right: 30px;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: ${theme.shadow.base};
  font-size: ${theme.font.size.sm};
  padding: 1.25em;
  box-sizing: border-box;
  background-color: ${({ background }) => (background ? background : theme.color.green)};
  color: ${({ color }) => (color ? color : theme.color.white)};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ background }) => (background ? background : theme.color.grey)};
  }
`;
const Home = () => {
  return (
    <>
      <Screen fillHeight>
        <Card center column height="80vh">
          <Title>{general.title}</Title>
          <Text>{general.subtitle}</Text>
          {/* <Search /> */}
          <ButtonLink to="/upitnik">Popunite Upitnik</ButtonLink>
          <SocialIcon />
        </Card>
      </Screen>
      <Screen>
        <Card justifyCenter alignStretch column>
          <Title>{about.title}</Title>
          {about.text}
        </Card>
        <Card justifyCenter alignStretch column>
          {about.text2}
        </Card>
        <Card backgroundImage={passportImage} />
      </Screen>
      <Screen />
    </>
  );
};

export default Home;
