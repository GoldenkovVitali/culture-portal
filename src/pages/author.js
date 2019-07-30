import React from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Timeline from '../components/timeline/Timeline';
import Map from '../components/map/map';

const AuthorPage = () => (
  <div className="author-wrapper">
    <header className="header-section">header</header>
    <aside className="author-card-section">author card</aside>
    <main className="main-section">
      <section className="biography">biography</section>
      <section className="timeline" id="timeline">
        <Timeline />
      </section>
      <section className="gallery">gallery</section>
      <Map />
    </main>
  </div>
);

export default AuthorPage;
