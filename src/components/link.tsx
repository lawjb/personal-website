import { Link } from "gatsby";
import styled from "styled-components";

import { color, spacing } from "../utils";

export default styled(Link).attrs({ activeClassName: "active" })`
  width: 100%;
  margin: 0 ${spacing(3)};
  border: 1px solid ${color("primary")};
  border-radius: ${spacing(2)};
  color: ${color("primary")};
  background-color: ${color("background")};
  transition: all 0.1s;
  cursor: pointer;
  text-align: center;
  text-decoration: none !important;

  &:hover {
    color: ${color("content")};
    background-color: ${color("secondary")} !important;
    border: 1px solid ${color("secondary")};
  }

  &.active {
    color: ${color("content")};
    background-color: ${color("primary")};
  }
`;
