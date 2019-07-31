import React from 'react';
import './map.scss';

const Map = ({
  content,
}) => (
<<<<<<< HEAD
  <div>
    <iframe className="map" title={content.id} allowFullScreen frameBorder="0" src={`https://www.google.com/maps/embed?pb=${content}`} />
  </div>
);
=======
    <div>
      {content && content.id ? <iframe className="map" title={content.id}
        allowFullScreen frameBorder="0" src={`https://www.google.com/maps/embed?pb=${content}`} />
        : null}
    </div>
  );
>>>>>>> master

export default Map;
