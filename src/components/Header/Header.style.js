import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 1em;
  padding: 0.5em 1em;
  border-bottom: ${(props) => props.theme.primary.border};
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    position: fixed;
    max-width: calc(100% - 2em);
    top: 0em;
    z-index: 9;
  }
`;
export const Wrapper = styled.div`
  width: 83em;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.img`
  max-height: 5em;
  width: 10em;
`;

export const Actions = styled.nav``;

export const Cart = styled.div`
  min-height: 2.5em;
  border: 1px solid #a9a9a9;
  border-radius: 1.5em;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: relative;
  color: #222;
  img {
    width: 1.5em;
    margin-right: 0.5em;
  }
`;

export const Quantity = styled.div`
  padding: 0.2em;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.2em;
  left: 22%;
  opacity: 0.9;
  border-radius: 100%;
  background-color: ${(props) => props.theme.primary.background};
  color: #fff;
  font-size: 0.8em;
  font-weight: normal;
`;
