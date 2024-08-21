import React from "react";
import {
  StyledList,
  StyledItemWrapper,
  StyledItemTerm,
  StyledItemDefinition,
} from "./styles";

function ProductStats({ stats }) {
  return (
    <StyledList>
      {stats &&
        stats.length &&
        stats.map((stat) => {
          return (
            <StyledItemWrapper key={stat.title}>
              <StyledItemTerm>{stat.title}</StyledItemTerm>
              <StyledItemDefinition>{stat.description}</StyledItemDefinition>
            </StyledItemWrapper>
          );
        })}
    </StyledList>
  );
}

export default ProductStats;
