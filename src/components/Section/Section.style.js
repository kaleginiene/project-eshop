import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 83em;
  margin: 0 auto;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
