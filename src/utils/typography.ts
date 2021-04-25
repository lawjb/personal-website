import Typography from "typography";
// @ts-ignore: no typings available
import githubTheme from "typography-theme-github";

const typography = new Typography(githubTheme);

export const { scale, rhythm, options } = typography;
export default typography;
