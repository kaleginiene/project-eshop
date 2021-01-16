import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../../components";
import * as S from "./QuantityBlock.styles";

function filterCart(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID);
  if (productQuantity.length === 1) {
    const updatedCart = cartProducts.items.map((item) =>
      item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
    );
    return updatedCart;
  } else {
    return 0;
  }
}
function filterCartDecrease(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID);
  if (productQuantity.length === 1) {
    const updatedCart = cartProducts.items.map((item) =>
      item.id === productID ? { ...item, quantity: item.quantity - 1 } : item
    );
    return updatedCart;
  } else {
    return 0;
  }
}
function filterQuantity(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID);
  if (productQuantity.length === 1) {
    return productQuantity[0].quantity;
  }
}
function removeItem(cartProducts, productID) {
  const index = cartProducts.items.findIndex((y) => y.id === productID);
  cartProducts.items.splice(index, 1);
  const newList = cartProducts.items.filter((x) => x.id !== productID);
  cartProducts.setItems(newList);
}

function QuantityBlock({ productID }) {
  const [quantity, setQuantity] = useState(1);
  const cartProducts = useContext(CartContext);

  return (
    <S.QuantityWrapper>
      <Button
        handleClick={() => {
          if (quantity === 1) {
            removeItem(cartProducts, productID);
          } else {
            setQuantity(quantity - 1);
            cartProducts.setItems(
              filterCartDecrease(cartProducts, productID, quantity)
            );
          }
        }}
      >
        -
      </Button>
      <S.QuantityBlock>
        {quantity < 0
          ? setQuantity(0)
          : filterQuantity(cartProducts, productID)}
      </S.QuantityBlock>
      <Button
        handleClick={() => {
          setQuantity(quantity + 1);
          cartProducts.setItems(filterCart(cartProducts, productID, quantity));
        }}
      >
        +
      </Button>
    </S.QuantityWrapper>
  );
}

export default QuantityBlock;
