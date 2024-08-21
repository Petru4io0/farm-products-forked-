import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LogoText = styled.span`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colorMainForText};
`;
