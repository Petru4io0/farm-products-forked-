import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  padding: 16px 10px 17px;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: 0;
  min-width: 260px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-family: ${(props) => props.theme.fontFamily};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }
`;
