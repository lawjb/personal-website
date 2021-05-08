import { DefaultTheme } from "styled-components";

const sharedStyling = {
  spacing: [0, 2, 4, 8, 16, 32, 64, 128, 256],
};

export const lightTheme: DefaultTheme = {
  ...sharedStyling,
  colors: {
    primary: "#3273dc",
    secondary: "#209cee",
    neutral: "#58606A",
    outline: "#e2e4e8",
    content: "#fafbfc",
    background: "#ffffff",
    foreground: "#000000",
  },
};
