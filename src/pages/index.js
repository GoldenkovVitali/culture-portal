import React, { Fragment } from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import { Trans } from 'react-i18next';
import DirectorCard from '../components/directorCard/directorCard';
import Footer from '../components/Footer/Footer';
import '../language';


const Main = ({ language }) => (
  <Fragment>
    <main className="main-section">
      <section className="portal-description-section">
        <div>
          <h3>
            <Trans>
              Culture Portal
            </Trans>
          </h3>
          <article>
            <Trans>
            About theatre director
            </Trans>
          </article>
        </div>
      </section>
      <section className="director-card-section">
        <DirectorCard lang={`${language.charAt(0).toUpperCase()}${language.slice(1)}`} />
      </section>
    </main>
    <Footer />
  </Fragment>
);

export default Main;
