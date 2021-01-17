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
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <S.Cart onClick={handleClick}>
          <img src={CartIcon} alt="Shopping Cart" className="desktop" />
          <img src={CartBasket} alt="Shopping Basket" className="mobile" />{" "}
          &euro;
          {cart.toFixed(2)}
          {quantity > 0 && <S.Quantity>{quantity}</S.Quantity>}
        </S.Cart>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
