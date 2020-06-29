import express from 'express';
import path from 'path';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './src/components/home';
import template from './src/template';
import configureStore from './src/redux/configureStore';
import { fetchPosts } from './src/redux/actions';

const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  posts: [],
};

// server rendered home page
app.get('/', (req, res) => {
  res.send({
    hello: 'You stumbled on wrong page :( please try to access /page/:id urls',
  });
});
app.get('/page/:id', (req, res) => {
  const store = configureStore(initialState, true, req.params.id);
  store.dispatch(fetchPosts(req.params.id)).then((data) => {
    let content = renderToString(
      <Provider store={store}>
        <Home page={req.params.id} />
      </Provider>
    );
    const preloadedState = store.getState();
    const response = template('Server Rendered Page', preloadedState, content);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
  });
});
