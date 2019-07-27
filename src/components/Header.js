import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blackColor, greyColor } from '../theme/colors.scss';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background: greyColor,
  },
  title: {
    flexGrow: 1,
    color: blackColor,
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className="header-section">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Culture Portal
        </Typography>
        <Button href="/search" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
