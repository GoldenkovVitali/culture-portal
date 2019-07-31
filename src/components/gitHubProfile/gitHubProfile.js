import React from 'react';
import PropTypes from 'prop-types';
import './gitHubProfile.scss';

const GitHubProfile = (props) => {
  const { name, git, image } = props;
  return (
    <div className="github-card-wrapper">
      <div className="github-card">
        <a href={`https://github.com/${git}`} target="_blank" rel="noopener noreferrer"><img className="github-card__image" src={image} alt="" /></a>
      </div>
      <div className="label">
        <h3>{name}</h3>
        <h4>
          github:
          {git}
        </h4>
      </div>
    </div>
  );
};

GitHubProfile.propTypes = {
  name: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GitHubProfile;
