import styled from "styled-components";

export const StyledProductCard = styled.div`
  max-width: 727px;
  display: flex;
  gap: 20px;
  padding: 19px;
  border: 1px solid ${(props) => props.theme.colorGray};
  background-color: ${(props) => props.theme.colorWhite};
`;

export const StyledProductCardContent = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
