import React from 'react';
import './GitHubProfile.scss';

export default class GitHubProfile extends React.Component {
  render() {
    return (
      <div className='github-card'>
       <img className='github-card__image' src='https://avatars1.githubusercontent.com/u/25826685?s=460&v=4'/>
        <h3>Novak Darya</h3>
        <h4>github: daryanovak</h4>
      </div>
    );
  }
}
