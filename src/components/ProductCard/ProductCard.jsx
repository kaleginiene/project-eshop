import React from "react";
import { Button } from "../../components";
import * as S from "./ProductCard.style";
import HeartIcon from "../../assets/icons/heart.svg";
import GlutenFree from "../../assets/icons/gluten-free.svg";

function ProductCard({ products }) {
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
            {product.title}
            <S.Price>&euro;{product.price}</S.Price>
            <Button color="primary">Į krepšelį</Button>
          </S.Block>
        );
      })}
    </>
  );
}

export default ProductCard;
