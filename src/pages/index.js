import React, { Fragment } from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import DirectorCard from '../components/directorCard/directorCard';
import Footer from '../components/Footer/Footer';
import '../language';

const Main = ({ language }) => (
  <Fragment>
    <main className="main-section">
      <section className="portal-description-section">
        <div>
          <h3>Culture Portal</h3>
          <article>
            A theatre director or stage director is an instructor in the theatre field who oversees and
            orchestrates the mounting of a theatre production (a play, opera, musical, or devised piece
            of work) by unifying various endeavours and aspects of production. The director's function
            is to ensure the quality and completeness of theatre production and to lead the members of
            the creative team into realizing their artistic vision for it. The director thereby
            collaborates with a team of creative individuals and other staff, coordinating research,
            stagecraft, costume design, props, lighting design, acting, set design, stage combat, and
            sound design for the production. If the production is a new piece of writing or a (new)
            translation of a play, the director may also work with the playwright or a translator.
          </article>
        </div>
      </section>
      <section className="director-card-section">
        <DirectorCard lang={language.charAt(0).toUpperCase() + language.slice(1)} />
      </section>
    </main>
    <Footer />
  </Fragment>
);

export default Main;
