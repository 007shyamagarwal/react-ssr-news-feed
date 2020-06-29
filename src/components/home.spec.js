import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Home from './home';

describe('Home', () => {
  const initialState = {
    isFetching: false,
    posts: { hits: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Home page with empty content', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home page with content', () => {
    const hits = [
      {
        author: 'gerbilly',
        num_comments: 572,
        objectID: '19576092',
        points: 1623,
        title: 'You Are Not Google (2017)',
        url: 'https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb',
      },
    ];
    const store = mockStore({ ...initialState, post: { hits } });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
