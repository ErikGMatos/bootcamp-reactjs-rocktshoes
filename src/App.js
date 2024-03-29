import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
