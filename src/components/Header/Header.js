import React from 'react';
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
    margin: '5px 10px',
  },
}));

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={`header-section ${classes.root}`}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Culture Portal
        </Typography>
        <Link to="/search">
          <Button className={classes.button} color="primary">All Directors</Button>
        </Link>
        <div className={classes.dropDownContainer}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <Button className={classes.button} onClick={handleClick}>Language</Button>
              {open ? (
                <Paper className={classes.paper}>
                  <div className={classes.option}><span>ru</span></div>
                  <div className={classes.option}><span>en</span></div>
                  <div className={classes.option}><span>by</span></div>
                </Paper>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
