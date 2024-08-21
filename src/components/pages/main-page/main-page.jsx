import React from "react";
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/farm-products-advantages/farm-products-advantages";

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <Advantages advantages={advantages} />
    </>
  );
}

export default MainPage;
