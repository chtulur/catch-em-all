import styled from 'styled-components';

const Checkbox = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 0.15rem;
`;

const Container = styled.div`
  padding-left: 2rem;
`;

const CustomContainer = styled.div`
  display: flex;
  gap: 5rem;

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;

    & div:nth-of-type(2) {
      order: -1;
      margin: 0;
    }
    .selectAndList {
      margin-top: -4rem;
    }
  }
`;

const CustomSelect = styled.select`
  background-color: #f5f9ee;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.3rem;
  min-width: 8rem;

  @media only screen and (max-width: 725px) {
    width: 100%;
  }
`;

const NameContainer = styled.div`
  background: #247291;
  border-radius: 8px;
  color: #f5f9ee;
  margin-top: 2px;
  padding: 0.2rem 0.2rem 0.2rem 0.5rem;
  width: 13rem;

  @media only screen and (max-width: 725px) {
    width: 100%;
  }

  &.caught {
    background-color: #00bbf0;
  }

  &.selected {
    background-color: #e38600;
  }

  &.selected.caught {
    background-color: #fdb44b;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: inset 0 0 5px #f8da5b;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const SpinnerContainer = styled.span`
  position: relative;
  top: 3px;
  right: 35px;

  @media only screen and (max-width: 725px) {
    left: 185px;
    top: -22px;
  }
`;

export {
  Checkbox,
  Container,
  CustomContainer,
  CustomSelect,
  NameContainer,
  SpinnerContainer,
};
