import React from "react";
import mapBackground from "../assets/world.svg";
import Rectangle from "../components/Rectangle";
import Search from "../components/Search";
import Text from "../ui/Text";
import Title from "../ui/Title";
import WorldMap from "../ui/WorldMap";

const Home = () => {
  return (
    <>
      <Rectangle>
        <Title>Lorem, ipsum dolor.</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          adipisci reiciendis molestias nobis quas quae!
        </Text>
        <Search />
      </Rectangle>
      <WorldMap src={mapBackground} />
    </>
  );
};

export default Home;
