import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
