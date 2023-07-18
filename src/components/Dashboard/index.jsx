import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import profilePic from "../../images/profilePic.jpeg"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0F1E23',
    color: '#fff',
    padding: theme.spacing(2),
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  profilePic: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: '50%',
    marginRight: theme.spacing(2),
  },
  greetings: {
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: 'medium',
    marginBottom: theme.spacing(1),
  },
  message: {
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: 'light',
  },
  bodyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bigBox: {
    width: 'calc(66.66% - 30px)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    borderRadius: '10px'
  },
  regularBox: {
    width: 'calc(33.33% - 30px)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: '10px'
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.profileContainer}>
        <Avatar
          src={profilePic}
          alt="Profile Picture"
          className={classes.profilePic}
        />
        <div>
          <Typography variant="h4" className={classes.greetings}>
            Hey Rachel!
          </Typography>
          <Typography variant="body1" className={classes.message}>
            We hope you have a nice day.
          </Typography>
        </div>
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.bigBox}></div>
        <div className={classes.regularBox}></div>
        <div className={classes.regularBox}></div>
        <div className={classes.regularBox}></div>
        <div className={classes.regularBox}></div>
      </div>
    </div>
  );
};

export default Dashboard;
