import React from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

const MyChart = (props) => {
  const { posts: { hits = [] } = {} } = props;
  const chartData = hits.map((post, index) => [index, post.points]);
  return (
    <div
      style={{
        marginTop: '30px',
        width: '100%',
        height: '300px',
      }}
    >
      <Chart
        width='100%'
        height={'300px'}
        chartType='LineChart'
        loader={<div>Loading Chart</div>}
        data={[['x', 'posts'], ...chartData]}
        options={{
          hAxis: {
            title: 'ID',
          },
          vAxis: {
            title: 'Votes',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

export default connect(mapStateToProps)(MyChart);
