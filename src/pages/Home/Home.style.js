import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 83em;
  max-width: 100%;
  min-height: 65vh;
`;

export const FlexBlock = styled.section`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`;
