import styled from 'styled-components';

const Button = styled.div`
  background-color: #fdb44b;
  border-radius: 0.4rem;
  box-shadow: 0 2px 5px #5e5544;
  color: white;
  margin-top: 1rem;
  padding: 0.25rem 0;
  text-align: center;
  user-select: none;
  width: 6rem;

  &:active {
    transform: scale(0.98);
  }
`;

const Card = styled.div`
  position: relative;
  top: 2rem;
  right: 28rem;

  @media only screen and (max-width: 725px) {
    position: static;
  }

  .cardContent {
    align-items: center;
    background: rgb(114, 232, 225);
    background: linear-gradient(
      135deg,
      rgba(114, 232, 225, 1) 28%,
      rgba(244, 245, 110, 1) 100%
    );
    border: 3px dashed #58b3d3;
    border-radius: 0.8rem;
    box-shadow: 0 0 10px #418c9f;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: 4.8rem 1rem 1rem 1rem;
    padding: 1rem;
    position: sticky;
    top: 1rem;
    right: 20rem;
    transition: transform 0.5s;
    width: 10rem;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const CustomInnerList = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
`;

const CustomOuterList = styled.ul`
  list-style-type: none;
  margin-left: -10px;

  & li {
    margin-top: 3px;
  }
`;

const PokemonImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: center;
  width: fit-content;
`;

export {
  Button,
  Card,
  CustomInnerList,
  CustomOuterList,
  PokemonImageContainer,
};
