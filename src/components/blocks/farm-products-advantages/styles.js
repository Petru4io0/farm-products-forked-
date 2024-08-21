import styled from "styled-components";
import { Wrapper } from "/src/components/styled";

export const StyledWrapper = styled(Wrapper)`
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

export const AdvantagesCards = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
