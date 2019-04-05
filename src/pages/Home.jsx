// @ts-check
import React from "react";
import passportImage from "../assets/passport.jpeg";
import Card from "../components/Card";
import Search from "../components/Search";
import SocialIcon from "../components/SocialIcons";
import { about, general } from "../data";
import Button from "../ui/Button";
import Screen from "../ui/Screen";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Home = () => {
  return (
    <>
      <Screen fillHeight>
        <Card center column>
          <Title>{general.title}</Title>
          <Text>{general.subtitle}</Text>
          <Search />
          <SocialIcon />
        </Card>
      </Screen>
      <Screen>
        <Card justifyCenter alignStretch column>
          <Title>{about.title}</Title>
          {about.text}
          <Button>Popunite upitnik</Button>
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
