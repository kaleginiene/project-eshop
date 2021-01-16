import styled from "styled-components";

export const QuantityWrapper = styled.div`
  margin-right: 1em;
  margin-top: 0.5em;
  width: calc(100% - 1em);
  margin: 0 auto;
  height: 2em;
  align-items: center;
  border-radius: 1.5em;
  border: ${(props) => props.theme.primary.border};
  display: flex;
  Button {
    width: 25%;
    padding: 0.25em;
    font-size: 1.3em;
    font-weight: bold;
    background: transparent;
    :first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  Button:hover {
    background-color: ${(props) => props.theme.secondary.background};
  }
`;

export const QuantityBlock = styled.div`
  min-width: 3em;
  width: 50%;
  border-left: ${(props) => props.theme.primary.border};
  border-right: ${(props) => props.theme.primary.border};
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  color: #565656;
`;
