import React from 'react';

const Card = ({ posts = [], totalPosts }) => {
  const cards = posts.map((post, index) => (
    <div className='app-card' key={post.name}>
      {post.title}
    </div>
  ));

  return cards;
};

export default Card;
