import React from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';
import ModalVideoContainer from '../components/videoOverlay/videoOverlay';
import TimelineContainer from '../components/timeline/TimelineContainer';
import Page404 from '../components/page404/page404';
import { setI18n } from 'react-i18next';

const AuthorPage = (_data) => {
  console.log('data', _data);    // data in data.location.state

  let storage = JSON.parse(localStorage.getItem('culture-author'));
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
  } else {
    if (storage) {
      if (storage.location && storage.location.state && storage.location.state.idPage) {
        data = storage;
      }
    }
  }

  return (
    <div>
      {data && data.location.state ? <div className="author-wrapper">
        <header className="header-section">header</header>
        <aside className="author-card-section">author card</aside>
        <main className="main-section">
          <section className="biography">
            biography
            <ModalVideoContainer link={data.location.state.youtube} />
          </section>
          <section className="timeline-container">
            <TimelineContainer data={data.location.state} />
          </section>
          <section className="gallery">
            <Gallery arrImageUrl={data.location.state.gallery}/>
          </section>
          <Map content={data.location.state.map} />
        </main>
      </div>
        : <Page404 />}
    </div>
  );
};

export default AuthorPage;
