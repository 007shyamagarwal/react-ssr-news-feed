import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(
      `applicationState/${getState().pageId}`,
      JSON.stringify(getState())
    );
    return result;
  };
};

const reHydrateStore = (isServer, pageId) => {
  if (isServer) return;
  if (localStorage.getItem(`applicationState/${pageId}`) !== null) {
    return JSON.parse(localStorage.getItem(`applicationState/${pageId}`)); // re-hydrate the store
  }
};

export default function configureStore(preloadedState, isServer) {
  const { pageId } = preloadedState;
  const middlewares = isServer
    ? [thunkMiddleware]
    : [thunkMiddleware, localStorageMiddleware];
  return createStore(
    rootReducer,
    reHydrateStore(isServer, pageId) || preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
