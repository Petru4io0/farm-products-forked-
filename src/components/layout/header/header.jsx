import React from "react";
import Logo from "/src/components/UI/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledWrapper } from "./styles";

function Header() {
  return (
    <header>
      <StyledWrapper>
        <Logo />
        <Nav />
      </StyledWrapper>
    </header>
  );
}

export default Header;
