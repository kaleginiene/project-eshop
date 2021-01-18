import styled from "styled-components";

export const Block = styled.div`
  margin: 0.5em;
  padding: 0.5em 0.5em 1em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(25% - 0.9em);
  height: 24em;
  border: ${(props) => props.theme.primary.border};
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;

  &:nth-child(5) {
    margin-left: 0;

    @media only screen and (max-width: 767px) {
      margin-left: 0.5em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 0.5em;
    }
  }

  &:nth-child(4n + 1) {
    margin-left: 0;

    @media only screen and (max-width: 767px) {
      margin-left: 0.5em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 0.5em;
    }
  }

  &:first-child {
    margin-left: 0;

    @media only screen and (max-width: 767px) {
      margin-left: 0.5em;
      margin-top: 6em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 0.5em;
      margin-top: 6em;
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

  @media only screen and (max-width: 767px) {
    width: calc(100% - 1em);
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.2em;
    height: 12em;
    margin: 0 0.5em;
    position: relative;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: calc(50% - 1em);
    margin: 0.5em;
    height: 20em;
    :nth-child(2) {
      margin-top: 6em;
    }
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

  @media only screen and (max-width: 767px) {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    &.gluten-free {
      left: 35%;
      top: 50%;
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 0.5em;
  width: 100%;
  height: 6em;
  object-fit: contain;

  @media only screen and (max-width: 767px) {
    width: 40%;
  }

  @media only screen and (max-width: 767px) {
    height: 5em;
  }
`;

export const Title = styled.div`
  margin-top: 0.5em;

  @media only screen and (max-width: 767px) {
    width: 60%;
  }
`;

export const Price = styled.div`
  margin: 0.5em 0;
  color: ${(props) => props.theme.primary.background};
  font-weight: bold;
  font-size: 1.5em;

  @media only screen and (max-width: 767px) {
    width: 40%;
  }
`;

export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    width: 60%;
  }
`;
