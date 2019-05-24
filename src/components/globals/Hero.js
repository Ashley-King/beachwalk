import styled from "styled-components";
import homeImg from "../../images/homeBcg.jpeg";
const Hero = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Hero;
