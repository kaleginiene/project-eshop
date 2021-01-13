import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 83em;
  max-width: 100%;
  min-height: 65vh;
  display: flex;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`;

export const FlexBlock = styled.section`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  @media only screen and (max-width: 769px) {
    display: block;
    width: 100%;
  }
`;

export const CartBlock = styled.section`
  margin: 0.5em 0 0.5em 0.5em;
  padding: 1em 0.5em;
  width: calc(20% - 0.5em);
  max-width: 100%;
  background-color: ${(props) => props.theme.secondary.background};
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-right: 0.5em;
  }
`;
