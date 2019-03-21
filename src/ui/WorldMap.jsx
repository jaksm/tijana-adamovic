import styled from "styled-components";
import world from "../assets/world.svg";
import theme from "../theme";

const WorldMap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  z-index: -2;
  width: 80%;
  height: 80%;
  background-image: url(${world});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (max-width: ${theme.breakpoint}) {
    top: 50%;
    background-size: cover;
    background-position: left;
    width: 100%;
    /* background-size: auto; */
  }
`;

export default WorldMap;
