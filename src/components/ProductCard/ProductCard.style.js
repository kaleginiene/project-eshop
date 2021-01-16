import styled from "styled-components";

export const Block = styled.div`
  margin: 0em 0.5em 0.5em 0.5em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(25% - 0.9em);
  height: 28em;
  border: ${(props) => props.theme.primary.border};
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
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
    :hover {
      background-color: #c21b25;
    }
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
  margin: 0 0.5em 0.5em 0;
  :last-child {
    margin-right: 0;
  }
  width: 1.5em;
`;

export const Image = styled.img`
  margin-bottom: 0.5em;
  width: 100%;
  height: 8em;
  object-fit: contain;
`;
export const Title = styled.div`
  margin-top: 0.5em;
`;

export const Price = styled.div`
  margin: 0.5em 0;
  color: ${(props) => props.theme.primary.background};
  font-weight: bold;
  font-size: 1.5em;
`;

export const ButtonWrapper = styled.div``;
