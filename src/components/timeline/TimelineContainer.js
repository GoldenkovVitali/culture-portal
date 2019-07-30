import React from 'react';
import '../../scss/author.scss';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineContainer = (props) => {
  const config = {
    style: {
      color: 'gray',
    },
    bodyContainerStyle: {
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    },
  };
  const dataw  = props.data;
  const timeline = Object.keys(dataw).map(it => (
    <TimelineItem
      key="001"
      dateText={it}
      style={config.style}
      bodyContainerStyle={config.bodyContainerStyle}
    >
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <p>
        {dataw[it]}
      </p>
    </TimelineItem>
  ));
  return (
    <Timeline lineColor="#ddd">
      {timeline}
    </Timeline>
  );
};

export default TimelineContainer;
