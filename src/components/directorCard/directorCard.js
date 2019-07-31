import React from 'react';
import './directorCard.scss';


export default class DirectorCard extends React.Component {
  render() {
    return (
      <div className="director-card">
        <div className="director-card__image">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa48f282735235.5d266fe2f1b44.jpg" alt="director photo" />
        </div>
        <div className="director-card__info">
            <div className="director-card__info-main">
              <p>Yevgeniy Kryzhanovsky</p>
              <p className="director-card__info-birth">6 June 1955 - xxx</p>
            </div>
          <hr align="center" width="80" size="0.5" />
          <div className="director-card__info-description">
            <p>Born in 1955, in Nikolayev (SSR). He graduated from the school in Kozelsk ( RSFSR ) in 1972 year.</p>
          </div>
          <button className="director-card__learn-more-button" type="button"><span>learn more</span></button>
        </div>
      </div>
    );
  }
}
