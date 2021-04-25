import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found. Sorry!</h1>
      <Link to="/">Go home</Link>.
    </div>
  );
};

export default NotFoundPage;
