import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0F1E23',
    minHeight: '100vh',
    color: '#fff',
  },
}));

const Attendance = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Attendance Page</h1>
      {/* Add your attendance-related components and content here */}
    </div>
  );
};

export default Attendance;
