import React from 'react';
import './map.scss';

const Map = ({
  content
}) => (
    <div>
      {content && content.id ? <iframe className="map" title={content.id}
        allowFullScreen frameBorder="0" src={`https://www.google.com/maps/embed?pb=${content}`} />
        : null}
    </div>
  );

export default Map;
