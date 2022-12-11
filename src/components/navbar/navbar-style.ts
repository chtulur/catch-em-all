import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #247291;

  &:visited {
    color: #247291;
  }

  &:active {
    color: #58b3d3;
  }

  &.current {
    color: #003881;
  }
`;

export const Nav = styled.div`
  background-color: #f8da5b;
  color: #3b4cca;
  box-shadow: 0px 0px 8px #247291;
  padding: 0.8rem;

  & ul {
    display: flex;
    gap: 5rem;
    list-style-type: none;
  }

  & li {
    text-decoration: none;
  }
`;
