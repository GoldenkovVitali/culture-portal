import React from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import Header from '../components/Header';

const Main = () => (
  <div className="main-wrapper">
    <Header />
    <main className="main-section">portal description</main>
    <aside className="aside-section">author of the day block</aside>
    <footer className="footer-section">footer</footer>
  </div>
);

export default Main;
