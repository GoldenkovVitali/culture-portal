import React from 'react';
import '../../scss/author.scss';
import PropTypes from 'prop-types';

const TimelineItem = (props) => {
  const { index, content, isVisible } = props;
  return (
    <div className="item-container">
      <div className="index">
        <p>{isVisible}</p>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  index: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isVisible: PropTypes.string.isRequired,
};

export default TimelineItem;
