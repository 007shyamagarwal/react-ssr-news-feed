import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsFeed from './news-feed';
import MyChart from './graph';
import { render } from 'react-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssrDone: false,
    };
  }
  componentDidMount() {
    this.setState({ ssrDone: true });
  }
  render() {
    const { pageId = 0 } = this.props;
    const previous = 0 ? 0 : +pageId - 1;
    const next = +pageId + 1;
    return (
      <>
        <NewsFeed />
        {this.state.ssrDone && (
          <div className='btton-container'>
            <a
              href={window && `${window.location.origin}/page/${previous}`}
              className='organge'
            >
              Previous
            </a>
            <a
              href={window && `${window.location.origin}/page/${next}`}
              className='organge'
            >
              Next
            </a>
          </div>
        )}
        <MyChart />
      </>
    );
  }
}
const mapStateToProps = ({ isFetching, posts, pageId }) => {
  return {
    isFetching,
    posts,
    pageId,
  };
};
export default connect(mapStateToProps)(Home);
