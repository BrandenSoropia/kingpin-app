const colors = {
  yellow: "#fde74c",
  blue: "#5bc0eb",
  white: "#FFFFFF",
  grey: "#5b616b",
  black: "#333333",
};

const radii = {
  none: 0,
  round: 20,
};

const borderWidths = {
  none: 0,
  thin: 1,
};

// Based off of https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/
const fontSizes = {
  body: 17,
  title: 28,
  title2: 22,
  callout: 16,
};

const space = {
  none: 0,
  half: 4,
  one: 8,
  two: 16,
  three: 24,
};

const shadows = {
  regular: `-webkit-box-shadow: 0px 6px 5px 2px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 6px 5px 2px rgba(0,0,0,0.2);
  box-shadow: 0px 6px 5px 2px rgba(0,0,0,0.2);`,
};

const theme = {
  colors,
  radii,
  fontSizes,
  space,
  borderWidths,
  shadows,
};

export default theme;
