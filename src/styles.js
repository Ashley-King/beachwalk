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
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
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
