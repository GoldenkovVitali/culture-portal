import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PhotoGallery = ({ arrImageUrl }) => {
  const images = arrImageUrl.map(item => (
    <div>
      <img src={item} alt="icon of work" />
    </div>
  ));

  return <Carousel>{images}</Carousel>;
};

PhotoGallery.propTypes = {
  arrImageUrl: PropTypes.arrayOf(PropTypes.string),
};

PhotoGallery.defaultProps = {
  arrImageUrl: [],
};

export default PhotoGallery;
