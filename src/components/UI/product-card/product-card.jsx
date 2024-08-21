import React from "react";
import { StyledProductCard, StyledProductCardContent } from "./styles";
import Title, { TitleSize } from "/src/components/UI/title/title";
import ProductStats from "/src/components/UI/product-stats/product-stats";
import Tabs from "/src/components/UI/tabs/tabs";
import ProductDescription from "/src/components/UI/product-description/product-description";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <ProductDescription description={product.description} />,
    },
    {
      title: "Характеристики",
      content: <ProductStats stats={product.characteristics} />,
    },
    {
      title: "Свойства",
      content: <ProductStats stats={product.properties} />,
    },
  ];

  return (
    <StyledProductCard>
      <img src={product.image} width={248} height={248} alt={product.title} />
      <StyledProductCardContent>
        <Title size={TitleSize.SMALL} as="h3">
          {product.title}
        </Title>
        <Tabs tabs={tabs} />
      </StyledProductCardContent>
    </StyledProductCard>
  );
}

export default ProductCard;
