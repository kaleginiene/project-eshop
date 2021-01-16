import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) => (props.color === "primary" ? "#fff" : "#222")};
  outline: none;
  border: none;
  border-radius: 1.5em;
  padding: 0.5em 2em;
  cursor: pointer;
`;
