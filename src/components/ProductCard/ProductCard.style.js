import styled from "styled-components";

export const Block = styled.div`
  margin: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(25% - 1.5em);
  height: 25em;
  border: ${(props) => props.theme.primary.border};
  box-sizing: border-box;
  text-align: center;
  &:nth-child(4n) {
    margin-right: 0;
    @media only screen and (max-width: 768px) {
      margin-right: 0.5em;
    }
  }
  &:nth-child(5) {
    margin-left: 0;
    @media only screen and (max-width: 768px) {
      margin-left: 0.5em;
    }
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
    @media only screen and (max-width: 768px) {
      margin-left: 0.5em;
    }
  }

  &:first-child {
    margin-left: 0;
    @media only screen and (max-width: 768px) {
      margin-left: 0.5em;
    }
  }
  button {
    min-height: 2em;
    width: calc(100% - 1em);
    margin: 0 auto;
  }
  @media only screen and (max-width: 769px) {
    width: calc(100% - 1em);
    margin: 1em 0.5em;
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  margin: 0 0.5em 1em 0;
  :last-child {
    margin-right: 0;
  }
  width: 2em;
`;

export const Image = styled.img`
  margin-bottom: 1em;
  width: 100%;
  height: 10em;
  object-fit: contain;
`;

export const Price = styled.div`
  margin: 1em 0;
  color: ${(props) => props.theme.primary.background};
  font-weight: bold;
  font-size: 1.5em;
`;
