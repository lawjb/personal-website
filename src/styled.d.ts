import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: Array<number>;
    colors: {
      primary: string;
      secondary: string;
      outline: string;
      content: string;
      background: string;
      foreground: string;
    };
  }
}
