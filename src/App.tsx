import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { default as GlobalStyle } from './styles/global';
import { Navbar } from './components';
import { CatchEm, Home } from './pages';

const App: React.FC = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<CatchEm />} path='/catchEm'></Route>
      </Routes>
    </div>
  );
};

export default App;
