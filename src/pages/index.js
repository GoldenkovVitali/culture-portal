import React from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import DirectorCard from '../components/directorCard/directorCard';
import Header from '../components/Header/Header';

const Main = () => (
  <div className="main-wrapper">
    <Header />
    <main className="main-section">
      <h3>CULTURE PORTAL</h3>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero magna, venenatis
        quis aliquet et, rutrum in augue. Donec vel tempor dolor. Donec volutpat fringilla porta.
        Suspendisse non nulla tortor. Quisque commodo ornare mi, sit amet aliquet justo
        bibendum non. Integer bibendum convallis sapien, sit amet tincidunt orci placerat in.
        Integer vitae consequat augue.
      </article>
    </main>
    <aside className="aside-section">
      <div>
        <h3>DIRECTOR OF THE DAY</h3>
        <DirectorCard />
      </div>
    </aside>
    <footer className="footer-section">footer</footer>
  </div>
);

export default Main;
