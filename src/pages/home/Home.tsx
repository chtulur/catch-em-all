import React from 'react';
import logo from '../../images/International_Pokémon_logo.svg.png';
import { LogoContainer } from './home-style';

const Home: React.FC = () => {
  return (
    <LogoContainer>
      <img alt='logo' src={logo} style={{ width: '20rem' }} />
    </LogoContainer>
  );
};

export default Home;
