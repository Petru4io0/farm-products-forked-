import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const StyledText = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;

export const StyledPrice = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) => props.theme.colorForAboutBackground};
`;
