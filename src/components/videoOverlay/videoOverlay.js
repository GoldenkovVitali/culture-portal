import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { makeStyles } from '@material-ui/core/styles';
import ModalVideo from 'react-modal-video';
import { Button } from '@material-ui/core';
import { Trans } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ModalVideoContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let { link } = props;
  link = link === null ? '' : link.substr(-11);
  const classes = useStyles();
  return (
    <div>
      <ModalVideo channel="youtube" isOpen={isOpen} videoId={link} onClose={() => setIsOpen(false)} />
      <Button onClick={() => setIsOpen(true)} variant="contained" className={classes.button}>
        <Trans>
          Video
        </Trans>
      </Button>
    </div>
  );
};

ModalVideoContainer.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ModalVideoContainer;
