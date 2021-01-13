import styled from "styled-components";

export const Header = styled.header`
  border-bottom: ${(props) => props.theme.primary.border};
  margin-bottom: 1em;
  padding: 0.5em 1em;
  background-color: #fff;
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
  img {
    width: 1.5em;
    margin-right: 0.5em;
  }
`;
