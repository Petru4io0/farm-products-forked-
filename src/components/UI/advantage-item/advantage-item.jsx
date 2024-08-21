import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import {
  AdvantageCard,
  AdvantageCardHeader,
  AdvantageCardText,
  AdvantageCardType,
} from "./styles";

function AdvantageItem({ icon, owner, isNegative, slogan, about }) {
  return (
    <AdvantageCard isNegative={isNegative}>
      <AdvantageCardHeader style={{ backgroundImage: `${icon}` }}>
        <AdvantageCardType isNegative={isNegative}>{owner}</AdvantageCardType>
        <Title as="h3" size={TitleSize.DEFAULT}>
          {slogan}
        </Title>
      </AdvantageCardHeader>
      <AdvantageCardText dangerouslySetInnerHTML={{ __html: about }} />
    </AdvantageCard>
  );
}

export default AdvantageItem;
