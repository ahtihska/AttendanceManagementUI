import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import percentagePic from "../../../images/percentagePic.jpeg";
import { Grid, Button } from '@material-ui/core';
import { PieChart } from '@mui/x-charts/PieChart';
import ClassAttendanceReport from "./ClassAttendanceReport.jsx";
import ClassLeastAttendance from "./ClassLeastAttendance.jsx";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
//     backgroundColor: '#0F1E23',
    minHeight: '100vh',
    color: '#fff',
  },
 profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
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
   bodyContainer1: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      marginLeft : theme.spacing(2),
      marginRight : theme.spacing(3),
      overflowX: 'auto',
      whiteSpace: 'nowrap',

    },
  bodyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft : theme.spacing(2),
    marginRight : theme.spacing(3),
  },
  bigBox: {
    width: 'calc(71%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  biggestBox: {
    width: 'calc(100%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  regularBox: {
    width: 'calc(27%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
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
      marginBottom: theme.spacing(2),
      marginLeft : theme.spacing(1),
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  clicked: {
      backgroundColor: '#F47458',
  },
  teacher: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(5),
  },
  summaryContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(3),
  },
   boldContent: {
       fontFamily: 'Poppins',
       fontWeight: 'Bold',
       color: 'black',
       paddingTop: '15px',
   },
  summaryPic: {
      width: theme.spacing(12),
      height: theme.spacing(10),
      borderRadius: '10%',
      marginRight: theme.spacing(1),
  },
  fadedContent:{
      fontFamily: 'Poppins',
      opacity:0.5,
      color: 'black',
      paddingLeft: '120px',
      paddingTop: '50px',
  },
  notification:{
        fontFamily: 'Poppins',
        fontSize : 11,
        color: 'black',
     marginTop: theme.spacing(1),

  },
  notificationContainer:{
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
  absenteesContainer: {
     display: 'flex',
         flexDirection: 'column', // Set the direction to column
         alignItems: 'left',
         fontFamily: 'Poppins',
         fontSize: 11,
         color: 'black',
         overflow: 'auto',
         paddingTop: '40px',
         paddingLeft: '10px',
  },
  chartContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '380px',
  },
  legendContainer:{
    marginTop: theme.spacing(2),
  },
  calenderContainer: {
        width: '100%',
        height: 'calc(100% - 60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
  },
  tileHeadings: {
          fontSize: 20,
          fontFamily: 'Poppins',
          fontWeight: 700,
          position: 'absolute',
          color: 'black',
          padding: '20px',
  },
  heading:{
    fontFamily: 'Poppins',
    fontWeight: 'Bold',
    color: 'black',
    fontSize: 26,
    marginBottom: theme.spacing(2)
  },
  clearButton: {
      backgroundColor: '#F47458',
      color: 'white', // Change the text color to your desired color
      marginLeft: theme.spacing(1),
      float :'right',
      '&:hover': {
            backgroundColor: '#F57458', // Change the hover background color to your desired color
          },
      fontSize: 11,
      width : '100px',
      height: '20px',
    },
  cornerbox: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'Bold',
    marginLeft: theme.spacing(100),
    textAlign: 'right', // Align the text to the right
    marginRight: '20px',
    marginTop: '10px',
  },
  cornerText: {
          fontFamily: 'Poppins',
          opacity:0.7,
          color: 'black',

  },

}));

const Report = () => {
  const classes = useStyles();
  const [clickedDiv, setClickedDiv] = useState(null);

  const data = [
        { id: 0, value: 10, label: 'Absent', color: '#000000' },
        { id: 1, value: 40, label: 'Present', color: '#F47458' },
      ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const handleDivClick = (divId) => {
    setClickedDiv(divId);
  };

  return (
    <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item>
            <div className={classes.profileContainer}>

            </div>
          </Grid>
        </Grid>
        <div className={classes.bodyContainer1}>
                <div className={`${classes.smallBox} ${
                                         clickedDiv === 'X_A' ? classes.clicked : ''
                                       }`}
                                       onClick={() => handleDivClick('X_A')}>
                    <div className={classes.summaryContainer}>
                        <Avatar
                          src={percentagePic}
                          alt="Percentage Picture"
                          className={classes.summaryPic}
                        />
                        <div>
                          <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                            X A
                          </Typography>
                          <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 12}}>
                            TOTAL <b> 45 </b>
                          </Typography>
                        </div>
                    </div>
                </div>
                <div className={`${classes.smallBox} ${
                               clickedDiv === 'X_B' ? classes.clicked : ''
                             }`}
                             onClick={() => handleDivClick('X_B')}>
                    <div className={classes.summaryContainer}>
                    <Avatar
                      src={percentagePic}
                      alt="Percentage Picture"
                      className={classes.summaryPic}
                    />
                        <div>
                          <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                            X B
                          </Typography>
                          <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 12}}>
                            TOTAL <b> 50 </b>
                          </Typography>
                        </div>
                    </div>
                </div>
                <div className={`${classes.smallBox} ${
                               clickedDiv === 'X_C' ? classes.clicked : ''
                             }`}
                             onClick={() => handleDivClick('X_C')}>
                    <div className={classes.summaryContainer}>
                        <Avatar
                          src={percentagePic}
                          alt="Percentage Picture"
                          className={classes.summaryPic}
                        />
                        <div>
                          <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                            X C
                          </Typography>
                          <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 12}}>
                            TOTAL <b> 44 </b>
                          </Typography>
                        </div>
                    </div>
                </div>
                <div className={`${classes.smallBox} ${
                               clickedDiv === 'X_D' ? classes.clicked : ''
                             }`}
                             onClick={() => handleDivClick('X_D')}>
                    <div className={classes.summaryContainer}>
                        <Avatar
                          src={percentagePic}
                          alt="Percentage Picture"
                          className={classes.summaryPic}
                        />
                        <div>
                          <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                            X D
                          </Typography>
                          <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 12}}>
                            TOTAL <b> 42 </b>
                          </Typography>
                        </div>
                    </div>
                </div>
                <div className={`${classes.smallBox} ${
                               clickedDiv === 'X_E' ? classes.clicked : ''
                             }`}
                             onClick={() => handleDivClick('X_E')}>
                                    <div className={classes.summaryContainer}>
                                        <Avatar
                                          src={percentagePic}
                                          alt="Percentage Picture"
                                          className={classes.summaryPic}
                                        />
                                        <div>
                                          <Typography variant="h4" className={classes.boldContent} style = {{fontSize: 30}}>
                                            X E
                                          </Typography>
                                          <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 12}}>
                                            TOTAL <b> 38 </b>
                                          </Typography>
                                        </div>
                                    </div>
                </div>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.bigBox}>
                <div>
                <Typography variant="h6" className={classes.tileHeadings} component="h2">
                   Attendance List
                </Typography>
                </div>
                <div className={classes.cornerbox}>
                <Typography className={classes.cornerText} >TOTAL DAYS: <b> 20 </b> </Typography>
                </div>
                <div className={classes.notificationContainer}>
                     <ClassAttendanceReport/>
                </div>
            </div>
            <div className={classes.regularBox}>
                <Typography variant="h6" className={classes.tileHeadings} component="h2">
                     Class Attendance
                </Typography>
                <div className={classes.chartContainer}>
                    <PieChart
                                                  series={[
                                                    {
                                                      data: data.map((item) => ({ ...item, percentage: (item.value / total) * 100 })),
                                                    },
                                                  ]}
                                                  width={400}
                                                  height={200}
                                                  labels={({ datum }) => `${datum.label}: ${datum.percentage.toFixed(2)}%`}
                                                  colorScale={data.map((item) => item.color)}
                                                  legendSettings={{position: 'bottom'}}
                               />
                </div>
            </div>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.biggestBox}>
                <div>
                <Typography variant="h6" className={classes.tileHeadings} component="h2">
                   Least Attendance List
                </Typography>
                </div>
                <div className={classes.cornerbox}>
                <Typography className={classes.cornerText} >TOTAL DAYS: <b> 20 </b> </Typography>
                </div>
                <div className={classes.absenteesContainer}>
                     <ClassLeastAttendance/>
                </div>
            </div>
        </div>
    </div>


  );
};

export default Report;
