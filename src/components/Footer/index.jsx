import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0F1E23',
    minHeight: '100vh', // Set minimum height to fill the entire viewport
  },
  footer: {
    backgroundColor: '#0F1E23',
    color: '#fff',
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>

      </footer>
    </div>
  );
};

export default Footer;
