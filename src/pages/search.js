import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import SearchInput, { createFilter } from 'react-search-input';
import DirectorCardSearch from '../components/DirectorCardSearch/DirectorCardSearch';
import '../scss/generic.scss';
import '../scss/search.scss';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term });
  }

  render() {
    const { data, language } = this.props;
    const { searchTerm } = this.state;
    const keysToFilter = [
      `node.name${language.charAt(0).toUpperCase()}${language.slice(1)}`,
      `node.city${language.charAt(0).toUpperCase()}${language.slice(1)}`,
    ];
    const filteredEmails = data.allContentfulPerson.edges.filter(
      createFilter(searchTerm, keysToFilter),
    );

    return (
      <Fragment>
        <section className="search-section">
          <SearchInput className="search-input" onChange={this.searchUpdated} />
        </section>
        <section className="main-section">
          {filteredEmails.map(({ node }) => (
            <DirectorCardSearch
              key={node.idPage}
              state={node}
              language={language}
            />
          ))}
        </section>
      </Fragment>
    );
  }
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
`;
