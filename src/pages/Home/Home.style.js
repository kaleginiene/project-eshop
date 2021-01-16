import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 83em;
  max-width: 100%;
  min-height: 65vh;
  display: flex;
  @media only screen and (max-width: 767px) {
    display: block;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const FlexBlock = styled.section`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  @media only screen and (max-width: 769px) {
    display: ${(props) => (props.display === "false" ? "block" : "none")};
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: ${(props) => (props.display === "false" ? "flex" : "none")};
    flex-wrap: wrap;
    padding: 0.5em;
    width: 100%;
  }
`;

export const CartBlock = styled.section`
  margin: 0 0 0.5em 0.5em;
  padding-top: 1em;
  width: calc(25% - 0.5em);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${(props) => props.theme.secondary.background};
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 767px) {
    width: calc(100% - 1em);
    margin: 0.5em;
    margin-top: 6em;
    min-height: 90vh;
    display: ${(props) => (props.display === "true" ? "flex" : "none")};
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 6em;
    display: ${(props) => (props.display === "true" ? "flex" : "none")};
  }
`;
export const Wrapper = styled.div`
  padding: 0.5em;
  max-width: 100%;
`;

export const Block = styled.div`
  padding: 1em;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: center;
  Button {
    margin-right: 1em;
    border-radius: 0.5em;
    width: calc(80% - 1em);
    display: none;
    @media only screen and (max-width: 1024px) {
      display: block;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-right: 0.5em;
  }
`;
export const Price = styled.div`
  width: 20%;
  text-align: center;
  font-size: 0.8em;
  span {
    font-weight: bold;
  }
`;
