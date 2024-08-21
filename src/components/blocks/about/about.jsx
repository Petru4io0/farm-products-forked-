import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import { StyledSection, StyledWrapper, StyledText } from "./styles";

function About({ level }) {
  return (
    <StyledSection>
      <StyledWrapper>
        <Title level={level} size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledText>
      </StyledWrapper>
    </StyledSection>
  );
}

export default About;
