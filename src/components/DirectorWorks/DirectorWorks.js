import React from 'react';
import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { greyColor } from '../../scss/colors.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    overflowX: 'auto',
  },
  head: {
    background: greyColor,
  },
  headCell: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '18px',
  },
  bodyCell: {
    fontFamily: "'Raleway', sans-serif",
  },
}));

const DirectorWorks = ({ data, lang }) => {
  const classes = useStyles();
  const langKey = `works${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
  const rows = data[langKey];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.headCell}>
              <Trans>Year of creation</Trans>
            </TableCell>
            <TableCell align="right" className={classes.headCell}>
              <Trans>Works</Trans>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.info
                .split('')
                .slice(0, 10)
                .join('')}
            >
              <TableCell
                component="th"
                scope="row"
                className={classes.bodyCell}
              >
                {row.date}
              </TableCell>
              <TableCell align="right" className={classes.bodyCell}>
                {row.info}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DirectorWorks;
