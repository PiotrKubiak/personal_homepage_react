const colorNames = {
  white: "#FFFFFF",
  black: "#000000",
  scenceBlue: "#0066CC",
  bluemine: "#18587A",
  dodgerBlue: "#1E90FF",
  shipCove: "#788BBA",
  anakiwa: "#9DE5FF",
  tropicalBlue: "#C3DDF9",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  whiteLilac: "#F8F7FC",
  porcelain: "#EFF2F3",
  mercury: "#E5E5E5",
  slateGray: "#708090",
  doveGray: "#6D6C6C",
  tundora: "#4A4244",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
};

const common = {
  breakpoints: {
    mobileMax: "767px",
    tabletVMax: "991px",
    tabletHMax: "1199px",
  },
  boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
  //Rzeczy które nie zmieniają sie po zmianie theme
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scenceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      border: colorNames.porcelain,
      borderHover: colorNames.tropicalBlue,
      header: colorNames.scenceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.tundora,
    tile: {
      border: colorNames.tundora,
      borderHover: colorNames.bluemine,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
  },
};