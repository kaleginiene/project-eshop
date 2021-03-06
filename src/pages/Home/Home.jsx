import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { DisplayContext } from "../../contexts/display.context";
import { ProductCard, CartProduct, Button } from "../../components";
import * as S from "./Home.style";
import products from "../../utils/products";
import InfoIcon from "../../assets/icons/info.svg";

function priceSum(cart) {
  if (cart && cart !== undefined) {
    const pricePerObject = cart.items.map((item) => {
      return item.price * item.quantity;
    });
    return pricePerObject.reduce((a, v) => a + v, 0);
  } else {
    return 0;
  }
}

function Home() {
  const cartProducts = useContext(CartContext);
  const showCartList = useContext(DisplayContext);

  return (
    <S.Main>
      <S.FlexBlock display={showCartList.state.toString()}>
        <ProductCard products={products} />
      </S.FlexBlock>
      <S.CartBlock display={showCartList.state.toString()}>
        <S.Wrapper>
          Krepšelis
          <CartProduct cartList={cartProducts.items} />
        </S.Wrapper>
        <S.Wrapper>
          <S.Block>
            <Button>Pirkti</Button>
            <S.Price>
              <S.Block>
                Kaina <S.Icon src={InfoIcon} alt="Daugiau informacijos" />
              </S.Block>
              <span>&euro; {priceSum(cartProducts).toFixed(2)}</span>
            </S.Price>
          </S.Block>
          <S.Wrapper className="back-btn">
            <Button
              color="primary"
              handleClick={() => showCartList.setState(!showCartList.state)}
            >
              Atgal
            </Button>
          </S.Wrapper>
        </S.Wrapper>
      </S.CartBlock>
    </S.Main>
  );
}

export default Home;
