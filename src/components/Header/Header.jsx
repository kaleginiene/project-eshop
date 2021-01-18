import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import CartIcon from "../../assets/icons/shopping-cart.svg";
import CartBasket from "../../assets/icons/basket.svg";

function Header({ cart, quantity, handleClick }) {
  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={logoImg} alt="Barbora" />
        </Link>
        <S.Cart onClick={handleClick}>
          <S.CartIcon src={CartIcon} alt="Shopping Cart" />
          <S.BasketIcon src={CartBasket} alt="Shopping Basket" />
          &euro;
          {cart.toFixed(2)}
          {quantity > 0 && <S.Quantity>{quantity}</S.Quantity>}
        </S.Cart>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
