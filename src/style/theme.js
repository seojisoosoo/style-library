import { css } from "styled-components";

const colors = {
  skyblue: "#E9F3FF",
  blue: "#A6C7EF",
  grey: "#B4B4B4",
  black: "#000000",
};

const fonts = {
  text: css`
    font-family: "KOTRAHOPE";
    font-style: normal;
    /* font-weight: 500;
    letter-spacing: 0.07em; */
    font-size: 3rem; /* 48px */
    line-height: 1;
  `,
};

export const theme = {
  colors,
  fonts,
};
