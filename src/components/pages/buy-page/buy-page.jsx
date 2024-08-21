import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import Title, { TitleSize } from "/src/components/UI/title/title";
import {
  StyledSwiper,
  StyledLabelComponent,
  StyledWrapper,
  StyledSection,
} from "./styles";
import ProductCard from "/src/components/UI/product-card/product-card";
import CheckboxList from "/src/components/UI/checkbox-list/checkbox-list";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function ProductsList({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  return (
    <StyledSection>
      <StyledWrapper>
        <div>
          <Title as="h3" size={TitleSize.DEFAULT}>
            Выберите продукты
          </Title>
          <CheckboxList
            name={"select-products"}
            labelComponent={StyledLabelComponent}
            options={products.map((product) => ({
              value: product.id,
              title: product.title,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
        </div>
        <StyledSwiper
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          mousewheel
          pagination={{
            type: "fraction",
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledWrapper>
    </StyledSection>
  );
}

export default ProductsList;
