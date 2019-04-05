import React from "react";
import styled from "styled-components";
import { socialLinks } from "../data";

const SocialWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 30px;
`;

const SocialLink = styled.a`
  padding: 0.25rem;
  & > img {
    width: 35px;
    height: 35px;
  }
`;

const SocialIcon = () => {
  const socialLinksContent = socialLinks.map(socialLink => {
    const { alt, src, url } = socialLink;
    return (
      <SocialLink href={url} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </SocialLink>
    );
  });
  return <SocialWrapper>{socialLinksContent}</SocialWrapper>;
};

export default SocialIcon;
