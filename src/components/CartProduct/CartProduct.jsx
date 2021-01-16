import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import * as S from "./CartProduct.styles";
import Bin from "../../assets/icons/bin.svg";
import { QuantityBlock } from "../../components";

function priceSum(cart, price) {
  if (cart && cart !== undefined) {
    const pricePerObject = cart.items.map((item) => {
      const sum = item.price * item.quantity;
      return sum.toFixed(2);
    });
    return pricePerObject;
  } else {
    return price;
  }
}

function CartProduct({ cartList }) {
  const cartProducts = useContext(CartContext);

  return (
    <>
      {cartList.length === 0 && (
        <S.FlexBlock className="centered">
          Jūsų krepšelis yra tuščias
        </S.FlexBlock>
      )}
      {cartList.map((product) => {
        return (
          <S.FlexBlock key={product.id}>
            <S.Icon src={Bin} />
            <S.Image src={product.image} />
            <S.Block>
              <S.Title>{product.title}</S.Title>
              <S.Wrapper>
                <QuantityBlock productID={product.id} />
                <S.Price>&euro;{priceSum(cartProducts, product.price)}</S.Price>
              </S.Wrapper>
            </S.Block>
          </S.FlexBlock>
        );
      })}
    </>
  );
}

export default CartProduct;
