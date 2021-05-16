import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { Layout } from "../components";
import { spacing } from "../utils";

const Container = styled.div`
  margin: ${spacing(5)};
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <section>
        <h3>Uh oh!</h3>
        Looks like this page has been wiped from existence.
        <br />
        Whilst the doc sorts stuff out, let's get you...
        <Link to="/">
          <Container>
            <StaticImage
              src="../images/back-to-the-homepage.png"
              alt="back to the homepage"
              placeholder="blurred"
            />
          </Container>
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
