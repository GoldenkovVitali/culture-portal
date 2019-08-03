import React, { Fragment } from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';
import ModalVideoContainer from '../components/videoOverlay/videoOverlay';
import TimelineContainer from '../components/timeline/TimelineContainer';
import Page404 from '../components/page404/page404';
import DirectorCardSearch from '../components/DirectorCardSearch/DirectorCardSearch';

const AuthorPage = (_data) => {
  console.log('data', _data); // data in data.location.state

  const storage = JSON.parse(localStorage.getItem('culture-author'));
  let data = null;

  if (_data && _data.location && _data.location.state && _data.location.state.idPage) {
    if (storage) {
      if (storage.location && storage.location.state && storage.location.state.idPage) {
        if (storage.location.state.idPage !== _data.location.state.idPage) {
          localStorage.setItem('culture-author', JSON.stringify(_data));
          data = _data;
        } else {
          data = storage;
        }
      } else {
        data = _data;
      }
    } else {
      localStorage.setItem('culture-author', JSON.stringify(_data));
      data = _data;
    }
  } else if (storage) {
    if (storage.location && storage.location.state && storage.location.state.idPage) {
      data = storage;
    }
  }
  console.log(storage.location.state);

  return (
    <Fragment>
      {data && data.location.state ? (
        <Fragment>
          <aside className="author-card-section">
            <DirectorCardSearch key={data.location.state.id} state={data.location.state} language={data.language}  />
          </aside>
          <main className="main-section">
            <section className="timeline-container">
              <TimelineContainer data={data.location.state} lang={_data.language} />
            </section>
            <section className="gallery">
              <Gallery />
            </section>
            <Map content={data.location.state.map} />
          </main>
        </Fragment>
      )
        : <Page404 />}
    </Fragment>
  );
};

export default AuthorPage;
