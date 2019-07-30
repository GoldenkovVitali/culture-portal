import React from 'react';
import '../scss/generic.scss';
import '../scss/author.scss';
import Timeline from '../components/timeline/TimelineContainer';
import Map from '../components/map/map';

const data = {
  index1: 'adadasd',
  index2: 'afklalkalakjg',
  index3: 'asdlkadl;kad;l',
  index4: 'asdlkadl;kad;l',
  index5: 'asdlkadl;kad;l',
  index6: 'asdlkadl;kad;l',
  index10: 'asdlkadl;kad;l',
  index7: 'asdlkadl;kad;l',
  index8: 'asdlkadl;kad;l',
  index9: 'asdlkadl;kad;l',
};

const AuthorPage = () => (
  <div className="author-wrapper">
    <header className="header-section">header</header>
    <aside className="author-card-section">author card</aside>
    <main className="main-section">
      <section className="biography">biography</section>
      <section className="timelineContainer" id="timeline">
        <Timeline data={data} />
      </section>
      <section className="gallery">gallery</section>
      <Map />
    </main>
  </div>
);

export default AuthorPage;
