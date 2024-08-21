import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import Button from "/src/components/UI/button/button";
import AdvantageItem from "/src/components/UI/advantage-item/advantage-item";
import { StyledWrapper, AdvantagesCards } from "./styles";
import { AppRoute } from "/src/const";

function Advantages({ advantages }) {
  return (
    <section>
      <StyledWrapper>
        {advantages?.length ? (
          <>
            <Title as="h2" size={TitleSize.SMALL}>
              Почему фермерские продукты лучше?
            </Title>
            <AdvantagesCards>
              {advantages.map((advantage) => (
                <li key={advantage.id}>
                  <AdvantageItem {...advantage} />
                </li>
              ))}
            </AdvantagesCards>
            <Button link={AppRoute.BUY}>Купить</Button>
          </>
        ) : null}
      </StyledWrapper>
    </section>
  );
}

export default Advantages;
