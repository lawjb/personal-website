import * as React from "react";
import styled from "styled-components";

import { color, spacing } from "../utils";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${spacing(3)};
  padding: ${spacing(4)};
  background-color: ${color("background")};
  border: 1px solid ${color("outline")};
  border-radius: 4px;
`;

const Title = styled.h5`
  margin-top: 0;
  color: ${color("primary")};

  &:hover {
    color: ${color("secondary")};
  }
`;

const Description = styled.p`
  color: ${color("neutral")};
  font-size: 0.9em;
`;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  color: ${color("neutral")};
  font-size: 0.8em;
`;

const Language = styled.div`
  display: inline-block;
  margin: 0 ${spacing(2)};
`;

const BulletPoint = styled.span`
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin: 0 ${spacing(2)};
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const Time = styled.time`
  margin-left: auto;
  float: right;
  text-align: right;
`;

const Repo = (repo: any) => (
  <Card>
    <div>
      <a href={repo.url}>
        <Title>{repo.name}</Title>
      </a>
      <Description>{repo.description}</Description>
    </div>
    <Footer>
      {repo.languages.nodes.map((language: any) => (
        <Language>
          <BulletPoint color={language.color} />
          <span>{language.name}</span>
        </Language>
      ))}
      <Time>{new Date(repo.pushedAt).toLocaleDateString("en-GB")}</Time>
    </Footer>
  </Card>
);

export default Repo;
