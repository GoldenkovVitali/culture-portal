import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import SearchInput, { createFilter } from 'react-search-input';
import DirectorCardSearch from '../components/DirectorCardSearch/DirectorCardSearch';
import '../scss/generic.scss';
import '../scss/search.scss';

const KEYS_TO_FILTERS = ['node.nameRu'];

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term });
  }

  render() {
    const { data, language } = this.props;
    const { searchTerm } = this.state;
    const filteredEmails = data
      .allContentfulPerson
      .edges.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

    return (
      <Fragment>
        <section className="search-section">
          <SearchInput className="search-input" onChange={this.searchUpdated} />
        </section>
        <section className="main-section">
          {
            filteredEmails.map(({ node }) => (
              <DirectorCardSearch key={node.idPage} state={node} language={language} />
            ))
          }
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
