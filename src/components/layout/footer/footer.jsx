import React from "react";
import Logo from "/src/components/UI/logo/logo";
import { StyledWrapper, StyledFooter } from "./styles.js";

function Footer() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Logo />
        <span>Создано 2021</span>
      </StyledWrapper>
    </StyledFooter>
  );
}

export default Footer;
