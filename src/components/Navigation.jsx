import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import arrow from "../assets/more.svg";
import toggleIcon from "../assets/toggle.svg";
import theme from "../theme";

const NavigationContainer = styled(Flex)`
  position: fixed;
  width: 100%;
  z-index: 250;
  padding: 50px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  ${({ y }) => {
    if (y > 50) {
      return `background-color: ${theme.color.translucent};
    box-shadow: ${theme.shadow.right};
    `;
    }
  }}
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.color.black};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.md};
  letter-spacing: ${theme.font.letterSpacing};
  padding: 0 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${theme.color.grey};
  }
`;

const DropdownLink = styled.span`
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.color.black};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.md};
  letter-spacing: ${theme.font.letterSpacing};
  padding: 0 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${theme.color.grey};
  }
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  & > img {
    margin-top: -5px;
    margin-left: 7px;
    height: 15px;
    width: 15px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transform: translate(-7%, 110%);
  transition: opacity 0.3s ease;
`;

const VisibleOnMobile = styled.div`
  display: none;
  @media screen and (max-width: ${theme.breakpoint}) {
    display: block;
  }
`;

const VisibleOnDesktop = styled.div`
  display: none;
  @media screen and (min-width: ${theme.breakpoint}) {
    display: block;
  }
`;

const Logo = styled.h1`
  font-size: 32px;
  padding: 0;
`;

const Navigation = () => {
  const [y, setY] = useState(0);
  const [dropdownActive, setDropdownActive] = useState(false);

  const setOffset = () => {
    setY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", setOffset);
    return () => window.removeEventListener("scroll", setOffset);
  });
  return (
    <NavigationContainer justifyBetween y={y}>
      <FlexItem>
        <Logo as={Link} to="/">
          LOGO
        </Logo>
      </FlexItem>
      <FlexItem>
        <VisibleOnDesktop>
          <Flex>
            <Link to="/vize/usa">Usa</Link>
            <Link to="/vize/kanada">Kanada</Link>
            <Link to="/vize/engleska">Engleska</Link>

            <DropdownLink onClick={() => setDropdownActive(!dropdownActive)}>
              Ostale vize
              <img src={arrow} alt="toggle dropdown" />
              <DropdownMenu visible={dropdownActive}>
                <Link to="/vize/australija">Australija</Link>
                <Link to="/vize/novi-zeland">Novi Zeland</Link>
                <Link to="/esta-vize">Esta vize</Link>
              </DropdownMenu>
            </DropdownLink>

            <Link to="/pratece-usluge">Pratece usluge</Link>
            <Link to="/upitnik">Upitnik</Link>
          </Flex>
        </VisibleOnDesktop>
        <VisibleOnMobile>
          <img src={toggleIcon} alt="toggle" />
        </VisibleOnMobile>
      </FlexItem>
    </NavigationContainer>
  );
};

export default Navigation;
