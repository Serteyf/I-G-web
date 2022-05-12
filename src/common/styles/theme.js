import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
  heading: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
};
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "62em",
  xl: "62em",
});
const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};
const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
};

const customTheme = extendTheme(overrides);

export default customTheme;
