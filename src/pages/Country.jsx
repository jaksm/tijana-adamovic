import React from "react";
import Rectangle from "../components/Rectangle";
import Text from "../ui/Text";
import Title from "../ui/Title";
import WorldMap from "../ui/WorldMap";
import { countries } from "../data";

const Country = props => {
  const country = countries.find(c => c.name === props.match.params.county);
  return (
    <>
      <Rectangle>
        <Title>{country.title}</Title>
        <Text>{country.text}</Text>
      </Rectangle>
      <WorldMap src={country.image} />
    </>
  );
};

export default Country;
