import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import percentagePic from "../../../images/percentagePic.jpeg";
import AttendanceReport from "./AttendanceReport.jsx";
import { addDays } from 'date-fns';
import DateRangePicker from "./DateRangePicker.jsx";
import Box from '@mui/material/Box';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const useStyles = makeStyles((theme) => ({
  root: {
//     backgroundColor: '#0F1E23',
    color: '#fff',
    padding: theme.spacing(2),
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
    marginLeft : theme.spacing(2),
    marginRight : theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  dateRangeContainer: {
    width: 'calc(65%)',
    height: '400px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(3),
    marginTop: theme.spacing(4),
    borderRadius: '10px',
    overflow: 'auto',
    paddingTop: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  bigBox: {
    width: 'calc(55%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'auto',
        scrollbarColor: 'transparent transparent',
            '&::-webkit-scrollbar': {
              width: 6,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: 3,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },

  },
  regularBox: {
    width: 'calc(43%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    scrollbarColor: 'transparent transparent',
        '&::-webkit-scrollbar': {
          width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
  },
  smallBox: {
      width: 'calc(25% - 10px)',
      height: '150px',
      backgroundColor: '#fff',
      overflow: 'auto',
      marginBottom: theme.spacing(2),
      marginLeft : theme.spacing(1),
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px'

    },
  summaryContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(6),
  },
  summaryPic: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: '10%',
      marginRight: theme.spacing(2),
  },
  boldContent: {
      fontFamily: 'Poppins',
      fontWeight: 'Bold',
      color: 'black',
    },
  fadedContent:{
      fontFamily: 'Poppins',
      opacity:0.5,
      color: 'black',
  },
  chartContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'350px',
        marginTop:theme.spacing(1)
  },
  tileHeadings: {
          fontSize: 20,
          fontFamily: 'Poppins',
          fontWeight: 700,
          position: 'absolute',
          color: 'black',
          padding: '20px',
  },

  tableContainer:{
    display: 'flex',
         flexDirection: 'column', // Set the direction to column
         alignItems: 'left',
         fontFamily: 'Poppins',
         fontSize: 11,
         color: 'black',
         overflow: 'hidden',
         paddingTop: theme.spacing(3),
         paddingLeft: '10px',
 },
 days: {
     marginTop: theme.spacing(1),
     marginRight: theme.spacing(5),
   },
}));
const Report = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <DateRangePicker />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.smallBox}>
            <div className={classes.summaryContainer}>
                <Avatar
                  src={percentagePic}
                  alt="Percentage Picture"
                  className={classes.summaryPic}
                />
                <div>
                  <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                    <AttendanceReport type="Percentage" />%
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    ATTENDANCE PERCENTAGE
                  </Typography>
                </div>
            </div>
        </div>
        <div className={classes.smallBox}>
            <div className={classes.summaryContainer}>
                <Avatar
                  src={percentagePic}
                  alt="Percentage Picture"
                  className={classes.summaryPic}
                />
                <div>
                  <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                    <AttendanceReport type="totalDays" />
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    WORKING DAYS
                  </Typography>
                </div>
            </div>
        </div>
        <div className={classes.smallBox}>
            <div className={classes.summaryContainer}>
                <Avatar
                  src={percentagePic}
                  alt="Percentage Picture"
                  className={classes.summaryPic}
                />
                <div>
                  <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                    <AttendanceReport type="presentDays" />
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    DAYS ATTENDED
                  </Typography>
                </div>
            </div>
        </div>
        <div className={classes.smallBox}>
            <div className={classes.summaryContainer}>
                <Avatar
                  src={percentagePic}
                  alt="Percentage Picture"
                  className={classes.summaryPic}
                />
                <div>
                  <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                    <AttendanceReport type="absentDays" />
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    DAYS UNATTENDED
                  </Typography>
                </div>
            </div>
        </div>
        </div>
        <div className = {classes.bodyContainer}>
          <div className={classes.bigBox}>
            <div className={classes.tableContainer}>
                      <AttendanceReport type="table" />
            </div>
          </div>
          <div className={classes.regularBox}>
              <Typography variant="h6" className={classes.tileHeadings} component="h2">
                 Attendance Overview
              </Typography>
                  <div className={classes.chartContainer}>
                     <AttendanceReport type="pie" />
                  </div>
           </div>
      </div>
    </div>
  );
};

export default Report;