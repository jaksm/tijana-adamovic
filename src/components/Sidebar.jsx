// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import toggleIcon from "../assets/toggle.svg";
import theme from "../theme";

const SidebarContainer = styled.aside`
  height: 100vh;
  width: 100vw;
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.white};
  transition: transform 0.3s ease-in-out;
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
`;

const SidebarLinks = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarLink = styled(Link)`
  margin: 0;
  margin-bottom: 1rem;
  text-decoration: none;
  color: ${theme.color.black};
  font-size: ${theme.font.size.md};
  font-weight: ${theme.font.weight.bold};
  line-height: ${theme.font.lineHeight.lg};
  letter-spacing: ${theme.font.letterSpacing};
  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;

const Toggle = styled.img`
  position: absolute;
  top: 50px;
  right: 50px;
`;

const Sidebar = props => {
  return (
    <SidebarContainer active={props.active}>
      <Toggle src={toggleIcon} alt="toggle" onClick={props.onToggle} />
      <SidebarLinks onClick={props.onLinkClick}>
        <SidebarLink to="/vize/usa">Usa</SidebarLink>
        <SidebarLink to="/vize/kanada">Kanada</SidebarLink>
        <SidebarLink to="/vize/engleska">Engleska</SidebarLink>
        <SidebarLink to="/vize/australija">Australija</SidebarLink>
        <SidebarLink to="/esta-vize">Esta vize</SidebarLink>
        <SidebarLink to="/upitnik">Upitnik</SidebarLink>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
