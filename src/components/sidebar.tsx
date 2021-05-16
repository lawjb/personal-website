import React from "react";
import styled from "styled-components";
import {
  FaRegBuilding,
  FaRegEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Link from "./link";
import { useGitHubUser } from "../data";
import { color, spacing } from "../utils";

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 25%;
`;

const CenterAlignedText = styled.span`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 ${spacing(5)};
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: ${spacing(3)};
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  color: ${color("primary")};

  &:hover {
    color: ${color("secondary")};
    text-decoration: none;
  }
`;

const Emoji = styled.span`
  margin: 0 ${spacing(2)};
  letter-spacing: ${spacing(2)};
`;

const Bio = () => (
  <CenterAlignedText>
    Anglo-Dutch <Emoji>🇬🇧🇳🇱</Emoji> • Software engineer <Emoji>💻</Emoji> •
    Bookworm <Emoji>📚🪱</Emoji> • Film fanatic <Emoji>🍿</Emoji> • Traveller{" "}
    <Emoji>🌎</Emoji> • Pianist <Emoji>🎹</Emoji>
  </CenterAlignedText>
);

type Props = { className?: string };

const Sidebar = ({ className }: Props) => {
  const { viewer: my } = useGitHubUser();

  return (
    <nav className={className}>
      <Avatar src={my.avatarUrl} />
      <h1>{my.name}</h1>
      <Row>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
      </Row>
      <Bio />
      <div>
        <ContactDetail>
          <FaRegBuilding size="1.2rem" title="Company" />
          <span>{my.company}</span>
        </ContactDetail>
        <ContactDetail>
          <FaMapMarkerAlt size="1.2rem" title="Location" />
          <span>{my.location}</span>
        </ContactDetail>
        <ContactDetail>
          <FaRegEnvelope size="1.2rem" title="Email address" />
          <ExternalLink href={`mailto:${my.email}`}>{my.email}</ExternalLink>
        </ContactDetail>
      </div>
      <Row>
        <ExternalLink href={my.url}>
          <FaGithub size="1.2rem" title="GitHub" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/lawrencejberry">
          <FaLinkedin size="1.2rem" title="LinkedIn" />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/lawrencejberry">
          <FaTwitter size="1.2rem" title="Twitter" />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/lawrencejberry">
          <FaInstagram size="1.2rem" title="Instagram" />
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/channel/UC7gVUWUEpjAvI5-de0KDaJg/featured">
          <FaYoutube size="1.2rem" title="YouTube" />
        </ExternalLink>
      </Row>
    </nav>
  );
};

export default styled(Sidebar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 0 2px ${color("outline")};
  padding: ${spacing(6)} ${spacing(5)};
  background-color: ${color("background")};

  & > * {
    margin: ${spacing(4)} 0;
  }
`;
