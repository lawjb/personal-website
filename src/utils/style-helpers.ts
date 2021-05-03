import { DefaultTheme } from "styled-components";

type ThemeProps = {
  theme: DefaultTheme;
};

export const color = (color: keyof DefaultTheme["colors"]) => ({
  theme,
}: ThemeProps) => theme.colors[color];

export const spacing = (index: number) => ({ theme }: ThemeProps) =>
  `${theme.spacing[index]}px`;
