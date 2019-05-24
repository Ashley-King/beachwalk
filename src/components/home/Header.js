import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import homeImg from "../../images/homeBcg.jpeg";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner greeting='Welcome to' title="Beachwalk Resort" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores facere quibusdam culpa molestiae perspiciatis?" />
      
    </Hero>
  );
};

export default Header;
