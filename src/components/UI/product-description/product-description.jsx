import React from "react";
import { StyledWrapper, StyledText, StyledPrice } from "./styles";

function ProductDescription({ description }) {
  return (
    <StyledWrapper>
      <StyledText>{description.text}</StyledText>
      <StyledPrice>{description.price}</StyledPrice>
    </StyledWrapper>
  );
}

export default ProductDescription;
