import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ProductCard, CartProduct } from "../../components";
import * as S from "./Home.style";
import products from "../../utils/products";

function Home() {
  const cartProducts = useContext(CartContext);

  return (
    <S.Main>
      <S.FlexBlock>
        <ProductCard products={products} />
      </S.FlexBlock>
      <S.CartBlock>
        Krepšelis
        <CartProduct cartList={cartProducts.items} />
      </S.CartBlock>
    </S.Main>
  );
}

export default Home;
