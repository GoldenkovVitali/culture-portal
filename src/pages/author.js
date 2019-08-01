import React from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';
import ModalVideoContainer from '../components/videoOverlay/videoOverlay';
import TimelineContainer from '../components/timeline/TimelineContainer';
import Page404 from '../components/page404/page404';

const AuthorPage = (data) => {
  console.log('data', data); // data in data.location.state
  return (
    <div>
      {data.location.state ? <div className="author-wrapper">
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
            <Gallery />
          </section>
          <Map content={data.location.state.map} />
        </main>
      </div>
        : <Page404 />}
    </div>
  );
};

export default AuthorPage;
