import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor } from "../../styles";

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

const BannerWrapper = styled.div``;

export default Banner;
