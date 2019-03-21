// @ts-check
import React from "react";
import passportImage from "../assets/passport.jpeg";
import Card from "../components/Card";
import Search from "../components/Search";
import SocialIcon from "../components/SocialIcons";
import Button from "../ui/Button";
import Screen from "../ui/Screen";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Home = () => {
  return (
    <>
      <Screen fillHeight>
        <Card center column>
          <Title>Lorem, ipsum dolor.</Title>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
          <Search />
          <SocialIcon />
        </Card>
      </Screen>
      <Screen>
        <Card justifyCenter alignStretch column>
          <Title>Lorem, ipsum dolor.</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta optio saepe, distinctio pariatur nemo
            obcaecati, numquam amet nihil, rerum delectus debitis dicta accusantium cum aliquam laborum. Ipsum, optio
            tenetur.
          </Text>
          <Button>Popunite upitnik</Button>
        </Card>
        <Card backgroundImage={passportImage} />
      </Screen>
      <Screen />
    </>
  );
};

export default Home;
