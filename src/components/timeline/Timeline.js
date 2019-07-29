import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TimelineItem from './TimelineItem';


class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { visible: false };
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <VisibilitySensor onChange={this.onChange}>
          <TimelineItem index="hello" isVisible={visible} content="test test test test test test test test test test test test test test test test test test test test test test test test" />
        </VisibilitySensor>
      </>
    );
  }
}

export default Timeline;
