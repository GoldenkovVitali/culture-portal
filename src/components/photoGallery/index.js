import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import imageOne from '../../../static/1.jpg';
import imageTwo from '../../../static/2.jpg';
import imageThree from '../../../static/3.jpg';
import imageFour from '../../../static/4.jpg';

const PhotoGallery = ({ arrImageUrl = [imageOne, imageTwo, imageThree, imageFour] }) => {
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

// PhotoGallery.defaultProps = {
//   arrImageUrl: [],
// };

export default PhotoGallery;
