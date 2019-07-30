import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';

class Layout extends Component {
  state = {
    language: 'en',
  }

  changeLanguage = (language) => {
    this.setState({
      language,
    });
  }

  render() {
    const { children } = this.props;
    const { language } = this.state;

    return (
      <Fragment>
        <Header lang={language} changeLang={this.changeLanguage} />
        {children}
      </Fragment>
    );
  }
}

export default Layout;
