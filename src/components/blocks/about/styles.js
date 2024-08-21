import styled from "styled-components";
import { Wrapper } from "/src/components/styled";

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colorForAboutBackground};
`;

export const StyledWrapper = styled(Wrapper)`
  position: relative;
  padding: 183px 553px 183px 90px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  gap: 24px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 37px;
    right: 177px;
    width: 273px;
    height: 627px;

    background-repeat: no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 76px;
    right: 90px;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colorBlue};
  }
`;

export const StyledText = styled.p`
  margin: 0;
  max-width: 540px;
`;
