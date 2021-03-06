import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsFeed from './news-feed';
import MyChart from './graph';

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
    const previous = 1 ? 1 : +pageId - 1;
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
        <div style={{ border: '1px solid orangered' }}>
          <MyChart />
        </div>
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
