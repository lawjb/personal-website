import * as React from "react";
import { Link } from "gatsby";

import { Layout } from "../components";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found. Sorry!</h1>
      <Link to="/">Go home</Link>.
    </Layout>
  );
};

export default NotFoundPage;
