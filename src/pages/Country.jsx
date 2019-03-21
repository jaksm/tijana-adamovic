import React from "react";
import Card from "../components/Card";
import { countries } from "../data";
import { Link } from "react-router-dom";
import Screen from "../ui/Screen";
import Text from "../ui/Text";
import styled from "styled-components";
import Title from "../ui/Title";
import theme from "../theme";

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

const Country = props => {
  const country = countries.find(c => c.name === props.match.params.county);
  return (
    <>
      <Screen fillHeight>
        <Card backgroundImage={country.image} />
        <Card column center>
          <Title>{country.title}</Title>
          <Text>{country.text}</Text>
          <ButtonLink to="/upitnik">Popunite Upitnik</ButtonLink>
        </Card>
      </Screen>
    </>
  );
};

export default Country;
