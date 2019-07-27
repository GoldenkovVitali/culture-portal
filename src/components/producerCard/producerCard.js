import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './producerCard.scss';


export default class ProducerCard extends React.Component {
  render() {
    return (
      <div className="producer-card">
        <div className="producer-card__image">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa48f282735235.5d266fe2f1b44.jpg" alt="producer photo" />
        </div>
        <div className="producer-card__info">
            <div className="producer-card__info-main">
              <p>Yevgeniy Kryzhanovsky</p>
              <p className="producer-card__info-birth">6 June 1955 - xxx</p>
            </div>
          <hr align="center" width="80" size="0.5" />
          <div className="producer-card__info-description">
            <p>Born in 1955, in Nikolayev (SSR). He graduated from the school in Kozelsk ( RSFSR ) in 1972 year. After the failure of the Moscow Theater School, he worked in the Tula Drama Theater stagehand. In 1973 he entered the Belarusian Theater and Art Institute in the acting department.</p>
          </div>
          <button className="producer-card__learn-more-button" type="button"><span>learn more</span></button>
        </div>
      </div>
    );
  }
}
