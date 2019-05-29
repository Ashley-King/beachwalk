import { css, keyframes } from "styled-components";
// set the colors
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

// set the fonts
export const setFont = {
  main: "'Lato', sans-serif;",
  slanted: "'Courgette', cursive !important;"
};

// set up flex container
export const setFlex = ({ x = "center", y = "center" }) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

// set up background

export const setBackground = ({
  img = "https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `
  background: linear-gradient(${color}, ${color}),
  url(${img}) center/cover no-repeat fixed;
  `;
};

// set up font-size
export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

// set up letter spacing
export const setLetterSpacing = (number = 2) => {
  return `
    letter-spacing: ${number}px
  `;
};

// set up border
export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `
    border: ${width} ${style} ${color}`;
};
// for media queries
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

// fadeIn animation for banner
export const fadeIn = (start, mid, end) => {
  const animation = keyframes`

0%{
  opacity: 0;
  transform: translateY(${start});
}
50%{
  opacity: 0.5;
  transform: translateY(${mid});
}
100%{
  opacity: 1;
  transform: translateY(${end});
}
`;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

// set up transitions
export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `
    transition: ${property} ${time} ${timing}
  `;
};

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};
