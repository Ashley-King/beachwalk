import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setTransition,
  setFont,
  setBorder
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  ${props =>
    `padding: ${props.pt || 0} ${props.pr || 0} ${props.pb || 0} ${props.pl ||
      0}`};
  ${setBorder({ color: setColor.champagnePink })};
  ${setLetterSpacing()};
  ${setTransition({ time: "0.5s" })};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props =>
    `margin: ${props.mt || 0} ${props.mr || 0} ${props.ml || 0} ${props.mb ||
      0}`};
  text-decoration: none;
  cursor: pointer;
`;
