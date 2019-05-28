import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import homeImg from "../../images/homeBcg.jpeg";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="Welcome to"
        title="Beachwalk Resort"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores facere quibusdam culpa molestiae perspiciatis?"
      >
        <PrimaryBtn mt="1rem">View Details</PrimaryBtn>
        {/* <PrimaryBtn as='a' href='https://google.com' mt="1rem" pr="2rem" pl="2rem" pt="1rem" pb="1rem">
          View Details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
