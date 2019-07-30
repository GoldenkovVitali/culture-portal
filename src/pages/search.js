import React from 'react';
import '../scss/generic.scss';
import '../scss/search.scss';
import { Link } from "gatsby";

const SearchPage = ({ data }) => {

  console.log(data);

  return (
    <div className="search-wrapper">
      <header className="header-section">header</header>
      <section className="search-section">search bar</section>

      <section className="list-section">
        <h2>Genereate Links by GraphQl:</h2>
        <ul>
          {

            data.allContentfulPerson.edges.map(({ node }) => (
              <li key={node.idPage}>
                <Link to={'/author'} state={node}>{node.nameRu}</Link>
              </li>
            ))

          }
        </ul>
      </section>

      <main className="main-section">cards</main>
    </div>
  );
}

export default SearchPage;

export const query = graphql`
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
`