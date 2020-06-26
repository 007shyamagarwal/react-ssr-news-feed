import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Home from './components/home';

// Create a fresh store
const store = configureStore();

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('#app')
);
