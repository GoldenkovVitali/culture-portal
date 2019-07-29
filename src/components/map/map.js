import React from 'react';
import './map.scss';

const Map = ({
  content
}) => (
    <div>
      <iframe className="map" title={content.id} allowFullScreen frameBorder="0" src={`https://www.google.com/maps/embed?pb=${content}`} />
    </div>
  );

export default Map;
