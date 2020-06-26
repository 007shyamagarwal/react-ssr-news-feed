export const increaseUpvote = (postId) => {
  return {
    type: 'INCREASE_UPVOTE',
    postId,
  };
};

export const hidePost = (postId) => ({
  type: 'HIDE_POST',
  postId,
});
