import React, { Fragment } from 'react';
import { Trans } from 'react-i18next';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';
import TimelineContainer from '../components/timeline/TimelineContainer';
import DirectorWorks from '../components/DirectorWorks/DirectorWorks';
import Page404 from '../components/page404/page404';
import DirectorCardSearch from '../components/DirectorCardSearch/DirectorCardSearch';
import '../scss/generic.scss';
import '../scss/author.scss';

const AuthorPage = (_data) => {
  let storage;
  if (typeof window !== 'undefined' && window.localStorage) {
    storage = JSON.parse(window.localStorage.getItem('culture-author'));
  }

  let data = null;

  if (
    _data
    && _data.location
    && _data.location.state
    && _data.location.state.idPage
  ) {
    if (storage) {
      if (
        storage.location
        && storage.location.state
        && storage.location.state.idPage
      ) {
        if (storage.location.state.idPage !== _data.location.state.idPage) {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('culture-author', JSON.stringify(_data));
            data = _data;
          }
        } else {
          data = storage;
        }
      } else {
        data = _data;
      }
    } else if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('culture-author', JSON.stringify(_data));
      data = _data;
    }
  } else if (storage) {
    if (
      storage.location
      && storage.location.state
      && storage.location.state.idPage
    ) {
      data = storage;
    }
  }

  return (
    <Fragment>
      {data && data.location.state ? (
        <Fragment>
          <aside className="author-card-section">
            <DirectorCardSearch
              key={data.location.state.id}
              state={data.location.state}
              language={_data.language}
            />
          </aside>
          <main className="main-section">
            <section className="timeline-container">
              <TimelineContainer
                data={data.location.state}
                lang={_data.language}
              />
            </section>
            <section className="gallery">
              <Gallery arrImageUrl={data.location.state.gallery} />
            </section>
            <section className="works">
              <h3>
                <Trans>List of works</Trans>
              </h3>
              <DirectorWorks data={data.location.state} lang={_data.language} />
            </section>
            <section className="map">
              <Map content={data.location.state.map} />
            </section>
          </main>
        </Fragment>
      ) : (
        <Page404 />
      )}
    </Fragment>
  );
};

export default AuthorPage;
