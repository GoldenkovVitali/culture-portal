import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 200,
    backgroundPosition: 'top',
  },
  button: {
    color: 'grey',
  },
  link: {
    color: 'black',
  },
});

const DirectorCardSearch = ({ state, language }) => {
  const classes = useStyles();
  const langCapitalized = `${language.charAt(0).toUpperCase()}${language.slice(1)}`;
  console.log(state, langCapitalized);

  return (
    <Card className={classes.card}>
      <Link to="/author" state={state} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={state.img.file.url}
            title={state[`name${langCapitalized}`]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {state[`name${langCapitalized}`]}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {state.yearsOfLife}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {state[`description${langCapitalized}`]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to="/author" state={state} className={classes.link}>
          <Button size="small" color="primary" className={classes.button}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DirectorCardSearch;
