import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../../components";
import * as S from "./QuantityBlock.styles";

function filterCart(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID); //finding if the product is in the cart
  if (productQuantity.length === 1) {
    const updatedCart = cartProducts.items.map((item) =>
      item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
    ); //count of each product
    return updatedCart;
  } else {
    return 0;
  }
}

function filterCartDecrease(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID); //finding if product is in the cart
  if (productQuantity.length === 1) {
    const updatedCart = cartProducts.items.map((item) =>
      item.id === productID ? { ...item, quantity: item.quantity - 1 } : item
    ); //if the product is in the cart, when running the function this items quantity decreases by one
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
  const index = cartProducts.items.findIndex((y) => y.id === productID); //finding the index of the item which is going to be removed
  cartProducts.items.splice(index, 1); //remove the item
  const newList = cartProducts.items.filter((x) => x.id !== productID); //filter all the items, that left after the removed one
  cartProducts.setItems(newList); //updateing context
}

function QuantityBlock({ productID }) {
  const [quantity, setQuantity] = useState(1);
  const cartProducts = useContext(CartContext);

  return (
    <S.Container>
      <S.Subtitle>
        Krepšelyje <span>{quantity} vnt.</span>
      </S.Subtitle>
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
            cartProducts.setItems(
              filterCart(cartProducts, productID, quantity)
            );
          }}
        >
          +
        </Button>
      </S.QuantityWrapper>
    </S.Container>
  );
}

export default QuantityBlock;
