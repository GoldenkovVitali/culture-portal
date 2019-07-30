import React from 'react';
import '../../scss/author.scss';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineContainer = () => {
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
  return (
    <Timeline lineColor="#ddd">
      <TimelineItem
        key="001"
        dateText="11/2010 – Present"
        style={config.style}
        bodyContainerStyle={config.bodyContainerStyle}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="04/2009 – 11/2010"
        style={config.style}
        bodyContainerStyle={config.bodyContainerStyle}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="04/2009 – 11/2010"
        style={config.style}
        bodyContainerStyle={config.bodyContainerStyle}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="08/2008 – 11/2008"
        style={config.style}
        bodyContainerStyle={config.bodyContainerStyle}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
    </Timeline>
  );
}

// TimelineContainer.propTypes = {
//   index: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

export default TimelineContainer;
