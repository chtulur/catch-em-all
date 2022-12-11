import React, { useState } from 'react';
import { CustomLink, Nav } from './navbar-style';

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState<string>();

  return (
    <Nav>
      <ul>
        <li>
          <CustomLink
            className={current === 'home' ? 'current' : ''}
            onClick={() => setCurrent('home')}
            to='/'
          >
            <b>Home</b>
          </CustomLink>
        </li>
        <li>
          <CustomLink
            className={current === 'catch' ? 'current' : ''}
            onClick={() => setCurrent('catch')}
            to='/catchEm'
          >
            <b>Catch'em all</b>
          </CustomLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
