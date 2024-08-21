import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, LogoText } from "./styles.js";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogo to="javascript:window.location.reload()">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
