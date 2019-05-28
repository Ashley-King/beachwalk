import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setRem,
  setColor,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn
} from "../../styles";


const Banner = ({ title, text, children, greeting }) => {
  return (
    <BannerWrapper>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  letter-spacing: ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet`
    width: 70vw;
    ${setBorder({ width: "6px", color: setColor.primaryColor })};
    p {
      width: 75%;
    }
  `}

  h1 {
    /* animation */
    ${fadeIn("100%", "-10%", "0")}
  }
  .info {
    /* animation */
    ${fadeIn("-100%", "10%", "0")}
  }
`;

export default Banner;
