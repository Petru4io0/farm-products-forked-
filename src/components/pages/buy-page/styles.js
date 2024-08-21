import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Wrapper } from "/src/components/styled";

export const StyledSwiper = styled(Swiper)`
  width: 727px;
  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const StyledSection = styled.section`
  background-color: #f6f6f6;
`;

export const StyledWrapper = styled(Wrapper)`
  padding: 40px 90px;
  display: grid;
  grid-template-columns: 353px 1fr;
  grid-gap: 18px 20px;
`;

export const StyledLabelComponent = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid #dedede;
  background-color: #f6f6f6;
`;
