import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from "react-i18next";

import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import { blackColor, greyColor, whiteColor } from '../../scss/colors.scss';

const useStyles = makeStyles(theme => ({
  root: {
    background: whiteColor,
  },
  button: {
    marginRight: theme.spacing(2),
    background: greyColor,
    color: blackColor,
    fontWeight: '700',
  },
  buttonLang: {
    marginRight: 0,
    background: greyColor,
    color: blackColor,
    fontWeight: '700',
  },
  title: {
    flexGrow: 1,
    color: blackColor,
    fontWeight: 'bold',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  dropDownContainer: {
    position: 'relative',
  },
  option: {
    margin: '0',
    width: '100%',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: '5px 0',
  },
}));

const Header = ({ lang, changeLang }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleLangOptionChange = ({ target }) => {
    let currElement = target;
    while (!currElement.dataset.lang) {
      currElement = currElement.parentElement;
    }
    changeLang(currElement.dataset.lang);
    handleClickAway();
    return changeLanguage(target.innerText);
  };

  return (
    <AppBar position="static" className={`header-section ${classes.root}`}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <Trans>
              Culture Portal
            </Trans>
        </Typography>
        <Link to="/search">
          <Button className={classes.button} color="primary">All Directors</Button>
        </Link>
        <div className={classes.dropDownContainer}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <Button className={classes.buttonLang} onClick={handleClick}>{lang}</Button>
              {open ? (
                <Paper className={classes.paper}>
                  {lang !== 'ru' ? (
                    <button
                      type="button"
                      data-lang="ru"
                      className={classes.option}
                      onClick={handleLangOptionChange}
                    >
                    ru
                    </button>
                  ) : null}
                  {lang !== 'en' ? (
                    <button
                      type="button"
                      data-lang="en"
                      className={classes.option}
                      onClick={handleLangOptionChange}
                    >
                    en
                    </button>
                  ) : null}
                  {lang !== 'by' ? (
                    <button
                      type="button"
                      data-lang="by"
                      className={classes.option}
                      onClick={handleLangOptionChange}
                    >
                    by
                    </button>
                  ) : null}
                </Paper>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  changeLang: PropTypes.func.isRequired,
};

export default Header;
