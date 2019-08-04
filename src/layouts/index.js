import React, { Component } from 'react';
import Header from '../components/Header/Header';

const returnPrefix = (path) => {
  const normalized = path.replace('/', '').replace('/', '');
  switch (normalized) {
    case '':
      return 'main';
    case 'search':
      return 'search';
    case 'author':
      return 'author';
    default:
      return Error('no case founded');
  }
};

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
    const { children, location } = this.props;
    const { language } = this.state;
    const selectorForWrapper = returnPrefix(location.pathname);
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { language }),);

    return (
      <div className={`${selectorForWrapper}-wrapper`}>
        <Header lang={language} changeLang={this.changeLanguage} />
        {childrenWithProps}
      </div>
    );
  }
}

export default Layout;
