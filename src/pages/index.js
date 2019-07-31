import React, { Component } from 'react';
import '../scss/generic.scss';
import '../scss/main.scss';
import DirectorCard from '../components/directorCard/directorCard';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../language';

class Main extends Component {
  state = {
    language: 'en',
  }

  changeLanguage = (language) => {
    this.setState({
      language,
    });
  }

  render() {
    const { language } = this.state;

    return (
      <div className="main-wrapper">
        <Header lang={language} changeLang={this.changeLanguage} />
        <main className="main-section">
          <section className="portal-description-section">
            <div>
              <h3>Culture Portal</h3>
              <article>
                A film director is a person who directs the making of a film.
                A film director controls a film's artistic and dramatic aspects and visualizes
                the screenplay (or script) while guiding the technical crew and actors in the
                fulfilment of that vision. The director has a key role in choosing
                the cast members, production design, and the creative aspects of filmmaking.
                Under European Union law, the director is viewed as the author of the film.
              </article>
            </div>
          </section>
          <section className="director-card-section">
            <DirectorCard />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
