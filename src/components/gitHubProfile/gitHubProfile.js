import React from 'react';
import PropTypes from 'prop-types';
import './gitHubProfile.scss';

const GitHubProfile = (props) => {
  const { name, git, image } = props;
  return (
    <div className="github-card-wrapper">
      <div className="github-card">
        <a
          href={`https://github.com/${git}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github-card__image" src={image} alt="" />
          <div className="overlay" />
        </a>
      </div>
      <div className="label">
        <p>{name}</p>
      </div>
    </div>
  );
};

GitHubProfile.propTypes = {
  name: PropTypes.instanceOf(Object).isRequired,
  git: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GitHubProfile;
