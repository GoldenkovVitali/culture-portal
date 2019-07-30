import React from 'react';
import '../../scss/author.scss';
import './animate.css';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

class TimelineItem extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { visible: false };
  }

  componentDidMount() {
    const target = document.getElementById('timeline');
    this.setState({ elem: target });
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const { visible } = this.state;
    const { index, content } = this.props;
    const itemContainerStyle = {
      visibility: 'visible',
    };
    const partialVisibility = true;
    const scrollCheck = true;
    const { elem } = this.state;
    if (elem !== undefined) {
      return (
        <>
          <VisibilitySensor
            scrollCheck={scrollCheck}
            containment={elem}
            onChange={this.onChange}
            partialVisibility={partialVisibility}
            minTopValue={5}
          >
            <div className={`${visible ? 'animated bounceInUp slow' : ''} item-container`} style={visible ? itemContainerStyle : { visibility: 'hidden' }}>
              <div className="index">
                <p>{index}</p>
              </div>
              <div className="content">
                <p>{content}</p>
              </div>
            </div>
          </VisibilitySensor>
        </>
      );
    }
    return <div />;
  }
}

TimelineItem.propTypes = {
  index: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineItem;
