import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "./style.scss"

const PhotoGallery = ({ arrImageUrl }) => {
  const images = arrImageUrl.map(item => (
    <div key={item.file.url}>
      <img src={item.file.url} alt="icon of work" />
    </div>
  ))

  return (
    <div className="wrapper-gallery">
      <Carousel className="photo-gallery" autoPlay>
        {images}
      </Carousel>
    </div>
  )
}

PhotoGallery.propTypes = {
  arrImageUrl: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    })
  ),
}

PhotoGallery.defaultProps = {
  arrImageUrl: [{ file: { url: "" } }],
}

export default PhotoGallery
