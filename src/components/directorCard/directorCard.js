import React from 'react';
import './directorCard.scss';


export default class DirectorCard extends React.Component {
  render() {
    return (
      <div className="director-card">
        <div className="director-card__image">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa48f282735235.5d266fe2f1b44.jpg" alt="director photo" />
        </div>
        <div className='director-card__card'>
        <div className="director-card__info">
          <div className="director-card__info-main">
            <h3>Marizza Bosquez</h3>
            <hr align="center" width="80" size="0.5" />
            <p className="director-card__info-birth">6 June 1955 - xxx</p>
          </div>
          <div className="director-card__info-description">
            <p>Having portuguese roots and a deep professional background, Marizza knows exactly how to embrace your natural beauty and emphasize your finest features.</p>
          </div>
          <button className="director-card__learn-more-button" type="button"><span>learn more</span></button>
        </div>
        </div>

      </div>
    );
  }
}
