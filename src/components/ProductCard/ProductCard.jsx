import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button, QuantityBlock } from "../../components";
import * as S from "./ProductCard.style";
import HeartIcon from "../../assets/icons/heart.svg";
import GlutenFree from "../../assets/icons/gluten-free.svg";

function filterCart(cartProducts, productID) {
  const productQuantity = cartProducts.items.filter((x) => x.id === productID);
  if (productQuantity.length === 1) {
    return productQuantity[0].quantity;
  } else {
    return 0;
  }
}

function ProductCard({ products }) {
  const cartProducts = useContext(CartContext);

  return (
    <>
      {products.map((product) => {
        return (
          <S.Block key={product.id}>
            <S.FlexBlock>
              {product.glutenFree && (
                <S.Icon src={GlutenFree} alt="Produktas be gliuteno" />
              )}
              <S.Icon
                src={HeartIcon}
                alt="Pridėti į mėgstamų produktų sąrašą"
              />
            </S.FlexBlock>
            <S.Image src={product.image} alt={product.title} />
            <S.Title>{product.title}</S.Title>
            <S.Price>&euro;{product.price}</S.Price>
            <S.ButtonWrapper>
              {filterCart(cartProducts, product.id) === 0 && (
                <Button
                  color="primary"
                  handleClick={(e) => {
                    e.target.style.display = "none";
                    cartProducts.setItems([
                      ...cartProducts.items,
                      {
                        id: product.id,
                        image: product.image,
                        title: product.title,
                        price: Number(product.price),
                        quantity: 1,
                      },
                    ]);
                  }}
                >
                  Į krepšelį
                </Button>
              )}
              {filterCart(cartProducts, product.id) > 0 && (
                <QuantityBlock productID={product.id} />
              )}
            </S.ButtonWrapper>
          </S.Block>
        );
      })}
    </>
  );
}

export default ProductCard;
