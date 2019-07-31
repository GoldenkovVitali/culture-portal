import React, { Fragment } from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Map from '../components/map/map';
import Gallery from '../components/photoGallery';

const AuthorPage = (data) => {
  console.log('data', data); // data in data.location.state
  return (
    <Fragment>
      <aside className="author-card-section">author card</aside>
      <main className="main-section">
        <section className="biography">biography</section>
        <section className="timeline">timeline</section>
        <section className="gallery"><Gallery /></section>
        <Map content={{ id: 'fuck' }} />
      </main>
    </Fragment>
  );
};

export default AuthorPage;
