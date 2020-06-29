import fetch from 'cross-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(id) {
  return {
    type: REQUEST_POSTS,
    id,
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INCREASE_UPVOTE = 'INCREASE_UPVOTE';
export const HIDE_POST = 'HIDE_POST';
function receivePosts(id, json) {
  return {
    type: RECEIVE_POSTS,
    id,
    posts: json,
    receivedAt: Date.now(),
  };
}

export function fetchPosts(id) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(id));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://hn.algolia.com/api/v1/search?query=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch(receivePosts(id, json));
      });
  };
}
