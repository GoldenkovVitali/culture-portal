import React from 'react';
import '../../scss/author.scss';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineContainer = ({ data, lang }) => {
  const config = {
    style: {
      color: 'grey',
    },
    dateInnerStyle: { background: 'gray', color: '#000' },
    bodyContainerStyle: {
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    },
  };

  const timeline = data[`timeline${lang.charAt(0).toUpperCase()}${lang.slice(1)}`].map((it, index) => (
    <TimelineItem
      key={`${index + Date()}`}
      dateText={it.date}
      style={config.style}
      bodyContainerStyle={config.bodyContainerStyle}
      dateInnerStyle={config.dateInnerStyle}
    >
      <p>
        {it.info}
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
