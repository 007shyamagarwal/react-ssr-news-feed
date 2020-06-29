import { RECEIVE_POSTS, INCREASE_UPVOTE, HIDE_POST } from './actions';

const reducers = (state = { isFetching: false, posts: [] }, action) => {
  switch (action.type) {
    case RECEIVE_POSTS: {
      return {
        ...state,
        posts: action.posts,
        pageId: action.id,
      };
    }
    case INCREASE_UPVOTE: {
      let updatedPosts = state.posts.hits.map((post) =>
        post.objectID === action.postId
          ? { ...post, points: post.points + 1 }
          : post
      );
      return {
        ...state,
        posts: { ...state.posts, hits: updatedPosts },
      };
    }
    case HIDE_POST: {
      let updatedPosts = state.posts.hits.filter(
        (post) => post.objectID !== action.postId
      );
      return {
        ...state,
        posts: { ...state.posts, hits: updatedPosts },
      };
    }
    default:
      return state;
  }
};

export default reducers;
