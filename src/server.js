import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { fetchPosts } from './redux/actions';
import Home from './components/home';

module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  // render the App store static markup ins content variable
  // Get a copy of store data to create the same store on client side
};
