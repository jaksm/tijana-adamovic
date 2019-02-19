import React from "react";
import mapBackground from "../assets/world.svg";
import Rectangle from "../components/Rectangle";
import Text from "../ui/Text";
import Title from "../ui/Title";
import WorldMap from "../ui/WorldMap";
import Input from "../ui/Input";

const Contact = () => {
  return (
    <>
      <Rectangle>
        <Title>Kontaktirajte nas!</Title>
        <div style={{ marginTop: "3rem" }}>
          <Input type="text" placeholder="Ime i prezime" />
          <Input type="email" placeholder="Email" />
          <Input as="textarea" type="text" placeholder="Poruka" rows="10" />
          <Input as="button" onClick={() => console.log("clicked")}>
            Posalji
          </Input>
        </div>
      </Rectangle>
      <WorldMap src={mapBackground} />
    </>
  );
};

export default Contact;
