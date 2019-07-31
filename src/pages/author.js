import React from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';
import TimelineContainer from '../components/timeline/TimelineContainer';

const AuthorPage = (data) => {
  console.log('data', data);    // data in data.location.state
  return (
    <div className="author-wrapper">
      <header className="header-section">header</header>
      <aside className="author-card-section">author card</aside>
      <main className="main-section">
        <section className="biography">biography</section>
        <section className="timeline-container">
          <TimelineContainer data={data.location.state} />
        </section>
        <section className="gallery">gallery</section>
        <Map content={data.location.state.map} />
      </main>
    </div>
  );
}

