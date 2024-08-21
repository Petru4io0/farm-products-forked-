import styled from "styled-components";
import { Wrapper } from "/src/components/styled";

export const StyledFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colorGray};
`;

export const StyledWrapper = styled(Wrapper)`
  padding: 17px 90px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
