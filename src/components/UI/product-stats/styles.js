import styled from "styled-components";

export const StyledList = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
`;

export const StyledItemWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export const StyledItemTerm = styled.dt`
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  color: #000000;
  flex-shrink: 0;
`;

export const StyledItemDefinition = styled.dd`
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  margin: 0;
`;
