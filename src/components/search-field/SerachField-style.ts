import styled from 'styled-components';

export const CustomSearchField = styled.div`
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
