import React from 'react';
import './directorCard.scss';
import { StaticQuery, graphql, Link } from "gatsby";

export default class DirectorCard extends React.Component {

  constructor() {
    super();
    this.state = { val: 1 };
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
          allContentfulPerson {
            edges {
              node {
                id
                idPage
                nameRu
                nameBy
                nameEn
                yearsOfLife
                img {
                  file {
                    url
                  }
                }
                cityRu
                cityBy
                cityEn
                descriptionRu
                descriptionBy
                descriptionEn
                timelineRu {
                  date
                  info
                }
                timelineBy {
                  date
                  info
                }
                timelineEn {
                  date
                  info
                }
                worksRu {
                  date
                  info
                }
                worksBy {
                  date
                  info
                }
                worksEn {
                  date
                  info
                }
                gallery {
                  file {
                    url
                  }
                }
                map
                youtube
              }
            }
          }
        }
      `}
        render={data => (
          <header>
            <h1>{JSON.stringify(data.allContentfulPerson.edges[this.state.val].node.descriptionRu)}</h1>

            <div className="director-card">
              <div className="director-card__image">
                <img src={data.allContentfulPerson.edges[this.state.val].node.img.file.url} alt="director photo" />
              </div>
              <div className="director-card__info">
                <div className="director-card__info-main">
                  <p>{data.allContentfulPerson.edges[this.state.val].node.nameRu}</p>
                  <p className="director-card__info-birth">{data.allContentfulPerson.edges[0].node.yearsOfLife}</p>
                </div>
                <hr align="center" width="80" size="0.5" />
                <div className="director-card__info-description">
                  <p>{data.allContentfulPerson.edges[this.state.val].node.descriptionRu}</p>
                </div>
                <Link className="director-card__learn-more-button" to={'/author'} state={data.allContentfulPerson.edges[this.state.val].node}><span>learn more</span></Link>
              </div>
            </div>
          </header>
        )}
      />
    );
  }
}