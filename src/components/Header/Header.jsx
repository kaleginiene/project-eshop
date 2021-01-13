import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import CartIcon from "../../assets/icons/shopping-cart.svg";

function Header() {
  const cart = useContext(CartContext);

  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <S.Cart>
          <img src={CartIcon} alt="Shopping Cart" /> &euro;
          {cart.items[0].price.toFixed(2)}
        </S.Cart>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
