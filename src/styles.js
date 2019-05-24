import { css } from "styled-components";

export const setColor = {
  bigFootFeet: "#ee964b",
  stilDeGrainYellow: "#f4d35e",
  lightSeaGreen: "#28afb0",
  blueSapphire: "#19647e",

  champagnePink: "#F9DAD0",
  paleCopper: "#D5896F",
  primaryColor: "#DAB785",
  mainWhite: "#fff",
  mainBlack: "#1f271b",
  mainGrey: "#ececec",
  lightGrey: "f7f7f7"
};

export const setFont = {
  main: "'Lato', sans-serif;",
  slanted: "'Courgette', cursive;"
};

export const setFlex = ({ x = "center", y = "center" }) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `
  background: linear-gradient(${color}, ${color}),
  url(${img}) center/cover no-repeat fixed;
  `;
};

export const setRem = (number = 16) => {
  return `
    ${number / 16}rem;
  `;
};

export const setLetterSpacing = (number = 2) => {
  return `
    letter-spacing: ${number}px
  `;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `
    border: ${width} ${style} ${color};
  `;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
