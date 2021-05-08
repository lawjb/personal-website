import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Layout } from "../components";
import { useGitHubUser } from "../data";
import { color } from "../utils";

const Subtitle = styled.p`
  color: ${color("neutral")};
  font-size: 0.8em;
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
          web development and UI engineering. I love coding and building things,
          particularly when the end result puts a smile on someone's face! I'm
          keen to have a positive social impact on the world in some shape or
          form through my work or hobbies, though I'm still in the process of
          figuring out exactly how! 🤔 😅
        </p>
        <p>
          In the meantime you can use this site to explore my interests and
          professional experience, or keep up to date with my latest shenanigans
          in my <Link to="/blog">blog</Link>. Feel free to get in touch by{" "}
          <a href={`mailto:${my.email}`}>email</a> or any of the social media
          links in the menu.
        </p>
      </section>
      <section>
        <h3>Projects</h3>
        <Subtitle>Some personal projects I've worked on</Subtitle>
      </section>
      <section>
        <h3>Experience</h3>
        <Subtitle>Technologies I'm familiar with</Subtitle>
      </section>
    </Layout>
  );
};

export default IndexPage;
