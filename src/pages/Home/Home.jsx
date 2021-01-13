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
      <S.CartBlock>Krepšelis</S.CartBlock>
    </S.Main>
  );
}

export default Home;
