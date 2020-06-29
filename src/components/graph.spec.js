import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import MyChart from './graph';

describe('MyChart', () => {
  const initialState = {
    isFetching: false,
    posts: { hits: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('MyChart page with empty content', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyChart />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
