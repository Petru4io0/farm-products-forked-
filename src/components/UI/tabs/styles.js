import styled from "styled-components";

export const TitleList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const TitleButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  font-family: ${(props) => props.theme.fontFamily};
  padding: 7px 11px;
  border: 1px solid ${(props) => (props.active ? "#7b9945" : "#dedede")};
  background-color: ${(props) => (props.active ? "#88aa4d" : "#f6f6f6")};
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorMainForText};
`;
