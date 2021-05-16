import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { color, spacing, lightTheme } from "../utils";

const SIDEBAR_WIDTH = "380px";
const MOBILE_BREAKPOINT = "768px";

const Content = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 ${spacing(5)};
  background-color: ${color("content")};
`;

type Props = React.PropsWithChildren<{ className?: string }>;

const Layout = ({ children, className }: Props) => (
  <ThemeProvider theme={lightTheme}>
    <div className={className}>
      <Sidebar />
      <Navbar />
      <Content>{children}</Content>
    </div>
  </ThemeProvider>
);

export default styled(Layout)`
  ${Sidebar} {
    display: none;
  }

  @media screen and (min-width: ${MOBILE_BREAKPOINT}) {
    ${Sidebar} {
      display: flex;
      position: fixed;
      top: 0px;
      bottom: 0px;
      width: ${SIDEBAR_WIDTH};
      z-index: 2;
    }

    ${Navbar} {
      display: none;
    }

    ${Content} {
      position: absolute;
      left: ${SIDEBAR_WIDTH};
      right: 0;
      z-index: 1;
    }
  }
`;
