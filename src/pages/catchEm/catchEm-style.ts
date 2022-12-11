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

const SearchField = styled.div`
  display: flex;
  margin: 1rem 0;

  .buttons {
    display: flex;
  }

  .checkboxContainer {
    display: flex;
    align-items: center;

    label {
      padding-top: 0.25rem;
      white-space: nowrap;
    }

    @media only screen and (max-width: 725px) {
      label {
        padding-bottom: 0.8rem;
      }
    }
  }

  @media only screen and (max-width: 725px) {
    flex-direction: column;

    .button {
      margin-top: 0.5rem;
      align-self: center;
    }

    .checkboxContainer {
      display: flex;
      margin-top: 1rem;
    }

    input {
      margin-bottom: 0.5rem;
    }
  }

  .button {
    white-space: nowrap;
    background-color: #fdb44b;
    border-radius: 0.3rem;
    box-shadow: 0 2px 5px #247291;
    color: white;
    margin-left: 0.5rem;
    padding: 0.35rem 0 0.2rem 0;
    text-align: center;
    user-select: none;
    width: 6.5rem;
    max-height: 27.2px;

    &:active {
      transform: scale(0.98);
    }
  }

  input {
    border: none;
    border-radius: 5px;
    padding: 0.3rem;
    background: #f5f9ee;
  }

  @media only screen and (max-width: 540px) {
    input {
      margin-top: -2rem;
    }

    .buttons {
      flex-direction: column;
    }

    .button {
      padding: 0.3rem 0;
      margin: 0.5rem 0;
    }

    .button:nth-child(2) {
      order: 1;
      padding: 0.3rem 0;
      margin: 0.5rem 0;
      margin-bottom: 4rem;
    }

    .checkboxContainer {
      position: relative;
      top: 9rem;

      .checkbox {
        margin-top: 0.2rem;
      }
    }
  }
`;

export {
  Checkbox,
  Container,
  CustomContainer,
  CustomSelect,
  NameContainer,
  SearchField,
  SpinnerContainer,
};
