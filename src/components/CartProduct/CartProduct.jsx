import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import * as S from "./CartProduct.styles";
import Bin from "../../assets/icons/bin.svg";
import { QuantityBlock } from "../../components";

function priceSum(cart, productID) {
  const filteredCart = cart.items.filter((x) => x.id === productID);
  if (filteredCart.length === 1) {
    const sum = filteredCart[0].price * filteredCart[0].quantity;
    return sum.toFixed(2);
  }
}

function removeItem(cart, productID) {
  const index = cart.items.findIndex((y) => y.id === productID);
  cart.items.splice(index, 1);
  const newList = cart.items.filter((x) => x.id !== productID);
  cart.setItems(newList);
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
      {cartList !== undefined &&
        cartList.map((product) => {
          return (
            <S.FlexBlock key={product.id}>
              <S.Icon
                src={Bin}
                onClick={() => {
                  removeItem(cartProducts, product.id);
                }}
              />
              <S.Image src={product.image} />
              <S.Block>
                <S.Title>{product.title}</S.Title>
                <S.Wrapper>
                  <QuantityBlock productID={product.id} />
                  <S.Price>&euro;{priceSum(cartProducts, product.id)}</S.Price>
                </S.Wrapper>
              </S.Block>
            </S.FlexBlock>
          );
        })}
    </>
  );
}

export default CartProduct;
