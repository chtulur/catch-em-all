import styled from 'styled-components';

const Spinner = styled.img`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotating 2s linear infinite;
  width: 1rem;
`;

export default Spinner;
