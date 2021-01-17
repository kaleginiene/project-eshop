import styled from "styled-components";

export const FlexBlock = styled.div`
  margin: 0 auto;
  margin: 0.5em 0;
  padding: 1em 0.5em;
  width: 100%;
  height: 7em;
  display: flex;
  align-items: center;
  position: relative;
  border: ${(props) => props.theme.primary.border};
  border-radius: 0.5em;
  background-color: #fff;
  box-sizing: border-box;
  &&.centered {
    justify-content: center;
    background-color: transparent;
  }
`;
export const Icon = styled.img`
  margin: 0 0.5em 0.5em 0;
  width: 1.5em;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  cursor: pointer;
`;

export const Block = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-top: 1em;
  padding-right: 0.5em;
`;

export const Image = styled.img`
  width: 25%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.div`
  font-size: 0.7em;
  max-width: 93%;
  margin-right: 1em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

export const Price = styled.div`
  margin: 0.5em 0;
  margin-left: 1em;
  color: ${(props) => props.theme.primary.background};
  font-weight: bold;
  font-size: 1em;
`;
