import React from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import ProducerCard from '../components/producerCard/producerCard';

const Main = () => (
  <div className="main-wrapper">
    <header className="header-section">header</header>
    <main className="main-section">portal description</main>
    <ProducerCard/>
    <aside className="aside-section">author of the day block</aside>
    <footer className="footer-section">footer</footer>
  </div>
);

export default Main;
