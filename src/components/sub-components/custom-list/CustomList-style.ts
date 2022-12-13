import styled from 'styled-components';

export const CustomInnerList = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
`;

export const CustomOuterList = styled.ul`
  list-style-type: none;
  margin-left: -10px;

  & li {
    margin-top: 3px;
  }
`;
