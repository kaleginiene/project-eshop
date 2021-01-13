import React from "react";
import { ProductCard } from "../../components";
import * as S from "./Home.style";
import products from "../../utils/products";

function Home() {
  return (
    <S.Main>
      <S.FlexBlock>
        <ProductCard products={products} />
      </S.FlexBlock>
    </S.Main>
  );
}

export default Home;
