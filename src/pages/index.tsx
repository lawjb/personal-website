import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Layout, Repo } from "../components";
import { useGitHubUser } from "../data";
import { color } from "../utils";

const Subtitle = styled.p`
  color: ${color("neutral")};
  font-size: 0.8em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const IndexPage = () => {
  const { viewer: my } = useGitHubUser();

  return (
    <Layout>
      <section>
        <h3>Intro</h3>
        <Subtitle>A little about myself</Subtitle>
        <p>Hi there, I'm Lawrence! 🙂 </p>
        <p>
          I currently work as a software engineer at Jump Trading, focusing on
          web and UI development. I love coding and building things,
          particularly when the end result puts a smile on someone's face or has
          a positive social impact! In my spare time I love reading, cooking,
          travelling and playing piano, and I also enjoy chatting and learning
          about history and astronomy. A slightly eclectic mix of interests, I
          know!
        </p>
        <p>
          Check out some projects I've worked on below or keep up to date with
          my <Link to="/blog">blog</Link>, where I discuss and share things I'm
          passionate about - particularly the hobbies I don't get to explore in
          my day job. Feel free to get in touch by{" "}
          <a href={`mailto:${my.email}`}>email</a> or any of the social media
          links in the menu.
        </p>
      </section>
      <section>
        <h3>Projects</h3>
        <Subtitle>Some personal projects I've worked on</Subtitle>
        <Grid>
          {my.repositories.nodes.map((repoProps: any) => (
            <Repo {...repoProps} />
          ))}
        </Grid>
      </section>
    </Layout>
  );
};

export default IndexPage;
