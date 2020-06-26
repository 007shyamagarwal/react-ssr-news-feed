import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hidePost, increaseUpvote } from './actions';

const tablekeys = [
  { title: 'Comments', value: 'num_comments', class: 'comments' },
  { title: 'Vote Count', value: 'points', class: 'votes' },
  { title: 'Upvote', value: 'upvote', class: 'upvote' },
  { title: 'News Details', value: 'title', class: 'details' },
];
const renderRow = (key, post, hidePost, increaseUpvote) => {
  switch (key.title) {
    case 'Upvote': {
      return (
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => increaseUpvote(post.objectID)}
        >
          ^
        </span>
      );
      break;
    }
    case 'News Details': {
      return (
        <>
          {post[key.value]} <span>By:{post.author}</span>
          <span
            style={{
              marginLeft: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => hidePost(post.objectID)}
          >
            [Hide]
          </span>
        </>
      );
      break;
    }
    default: {
      return <span>{post[key.value]}</span>;
    }
  }
};
const NewsFeed = (props) => {
  const {
    posts: { hits },
  } = props;
  const totalPosts = hits && hits.length;

  return (
    <>
      <table striped bordered>
        <thead className='table-heading'>
          <tr>
            {tablekeys.map((key) => (
              <th
                key={key}
                className={` ${key.class}`}
                style={{ textTransform: 'capitalize' }}
              >
                {key.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hits.map((post) => {
            return (
              <tr key={post.objectID}>
                {tablekeys.map((key) => {
                  return (
                    <td className={`${key.class}`} key={key + post.objectID}>
                      {renderRow(
                        key,
                        post,
                        props.hidePost,
                        props.increaseUpvote
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hidePost: bindActionCreators(hidePost, dispatch),
    increaseUpvote: bindActionCreators(increaseUpvote, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
