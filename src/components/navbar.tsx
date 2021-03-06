import React, { useState } from "react";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";

import Link from "./link";
import { useGitHubUser } from "../data";
import { color, spacing } from "../utils";

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25%;
`;

const Row = styled.div<{ mg: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 0 ${({ mg }) => spacing(mg)};
  }
`;

type Props = { className?: string };

const Navbar = ({ className }: Props) => {
  const { viewer: my } = useGitHubUser();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={className}>
      <Row mg={4}>
        <Avatar src={my.avatarUrl} />
        <h3>{my.name}</h3>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Row>
      {isOpen && (
        <Row mg={3}>
          <Link to="/">About</Link>
          <Link to="/blog">Blog</Link>
        </Row>
      )}
    </nav>
  );
};

export default styled(Navbar)`
  display: flex;
  flex-direction: column;
  margin: ${spacing(1)} 0;
  padding: ${spacing(2)} 0;
  box-shadow: 0 1px 2px ${color("outline")};

  & > * {
    margin: ${spacing(3)};
  }
`;
