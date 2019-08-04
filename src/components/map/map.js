import React from 'react';
import './map.scss';

const Map = ({ content }) => (
  <div className="map">
    {content ? (
      <iframe
        className="map-iframe"
        allowFullScreen
        frameBorder="0"
        src={`https://www.google.com/maps/embed?pb=${content}`}
      />
    ) : null}
  </div>
);

export default Map;
