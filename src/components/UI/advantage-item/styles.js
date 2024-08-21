import styled, { css } from "styled-components";

export const AdvantageCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 20px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.backgroundColorForShopAdvantage
      : props.theme.backgroundColorForFarmAdvantage};
`;

export const AdvantageCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-left: 72px;
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
`;

export const AdvantageCardType = styled.span`
  padding: 2px 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForShopProduct
      : props.theme.colorForFarmProduct};
`;

export const AdvantageCardText = styled.p`
  margin: 0;
`;
