import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import theme from "../theme";
import toggleIcon from "../assets/toggle.svg";

const NavigationContainer = styled.nav`
  display: fixed;
  z-index: 250;
  padding: 50px;
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
  return (
    <NavigationContainer>
      <Flex full alignCenter justifyBetween>
        <FlexItem>
          <Logo as={Link} to="/">
            LOGO
          </Logo>
        </FlexItem>
        <FlexItem>
          <VisibleOnDesktop>
            <Flex full alignCenter>
              <Link to="/vize/usa">Usa</Link>
              <Link to="/vize/kanada">Kanada</Link>
              <Link to="/vize/engleska">Engleska</Link>
              <Link as="span">Ostale vize</Link>
              <Link to="/pratece-usluge">Pratece usluge</Link>
              <Link to="/kontakt">Kontakt</Link>
            </Flex>
          </VisibleOnDesktop>
          <VisibleOnMobile>
            <img src={toggleIcon} alt="toggle" />
          </VisibleOnMobile>
        </FlexItem>
      </Flex>
    </NavigationContainer>
  );
};

export default Navigation;
