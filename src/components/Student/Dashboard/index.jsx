import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import profilePic from "../../../images/profilePic.jpeg";
import { Grid, Button } from '@material-ui/core';
import percentagePic from "../../../images/percentagePic.jpeg";
import { PieChart } from '@mui/x-charts/PieChart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import userPic from '../../../images/user.png';

const useStyles = makeStyles((theme) => ({
  root: {
//     backgroundColor: '#0F1E23',
    color: '#fff',
    padding: theme.spacing(2),
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
    color: 'black', // Set the font color to black
    fontSize: 30,
    fontWeight: 'medium',
    marginBottom: theme.spacing(1),
  },
  message: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: 'light',
  },
  bodyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  bigBox: {
    flexBasis: 'calc(33.33% - 10px)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  regularBox: {
    flexBasis: 'calc(33.33% - 10px)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: '10px',
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
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  smallBox: {
    width: 'calc(25% - 10px)',
    height: '150px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  teacher: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(5),
  },
  summaryContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(6),
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(4),
  },
  summaryPic: {
    width: theme.spacing(9),
    height: theme.spacing(11),
    borderRadius: '10%',
    marginRight: theme.spacing(1),
  },
  boldContent: {
    fontFamily: 'Poppins',
    fontWeight: 'Bold',
    color: 'black',
  },
  fadedContent: {
    fontFamily: 'Poppins',
    opacity: 0.5,
    color: 'black',
  },
  notification: {
    fontFamily: 'Poppins',
    fontSize: 11,
    color: 'black',
    marginTop: theme.spacing(1),
  },
  notificationContainer: {
    display: 'flex',
    alignItems: 'left',
    margin: theme.spacing(3),
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '380px',
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
  heading: {
    fontFamily: 'Poppins',
    fontWeight: 'Bold',
    color: 'black',
    fontSize: 26,
    marginBottom: theme.spacing(2),
  },
    today: {
      backgroundColor: '#4150B7',
      color: '#fff',
    },
  clearButton: {
    backgroundColor: '#4150B7',
    color: 'white',
    marginLeft: theme.spacing(1),
    float: 'right',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'black'
    },
    fontSize: 11,
    width: '100px',
    height: '20px',
  },
  calendarContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const currentDate = new Date();
    const tileClassName = ({ date }) => {
      if (date.toDateString() === currentDate.toDateString()) {
        return `${classes.today} react-calendar__tile--today`;
      }
      return '';
    };
  const [showNotifications, setShowNotifications] = useState(true);

  const handleClearAll = () => {
    setShowNotifications(false);
  };
  const [studentName, setStudentName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [classID, setClassID] = useState('');

    useEffect(() => {
      // Fetch student data
      axios
        .get('http://localhost:8086/students/id/1')
        .then((response) => {
          if (response.data) {
            setStudentName(response.data.firstName);
            setClassID(response.data.classId);

            const teacherId = response.data.teacherId;

            // Fetch teacher data using teacherId from student data
            axios
              .get(`http://localhost:8086/teachers/id/${teacherId}`)
              .then((teacherResponse) => {
                if (teacherResponse.data && teacherResponse.data.length > 0) {
                  const teacherData = teacherResponse.data[0]; // Select the first teacher from the response array
                  const { firstName, lastName } = teacherData;
                  setTeacherName(`${firstName} ${lastName}`);
                } else {
                  setTeacherName('No Teacher Found');
                }
              })
              .catch((error) => {
                console.error('Error fetching teacher data:', error);
                setTeacherName('Error fetching data');
              });
          } else {
            setStudentName('No Student Found');
          }
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
          setStudentName('Error fetching data');
        });
    }, []);



  const data = [
        { id: 0, value: 10, label: 'Absent', color: '#000000' },
        { id: 1, value: 40, label: 'Present', color: '#4150B7' },
      ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Grid item>
          <div className={classes.profileContainer}>
            <Avatar
              src={userPic}
              alt="Profile Picture"
              className={classes.profilePic}
            />
            <div>
              {/* Display the student's name */}
              <Typography variant="h4" className={classes.greetings}>
                Hey {studentName}!
              </Typography>
              <Typography variant="body1" className={classes.message}>
                We hope you have a nice day.
              </Typography>
            </div>
          </div>
        </Grid>
      <Grid item>
        <div className={classes.teacher}>
          <Typography variant="body1" className={classes.message} style={{ fontSize: 18 }}>
            Assigned to: <span style={{ color: '#4150B7', textDecoration: 'underline' }}>{teacherName}</span>
          </Typography>
          <Typography align = 'right' variant="body1" className={classes.message} style={{fontSize: 18,}}>
              Class <span style={{color: '#4150B7', textDecoration: 'underline'}}>{classID} </span>
          </Typography>
        </div>
      </Grid>
    </Grid>
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
                    80%
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
                50
              </Typography>
              <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                TOTAL CLASSES
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
                    40
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    CLASSES ATTENDED
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
                    10
                  </Typography>
                  <Typography variant="body1" className={classes.fadedContent} style = {{fontSize: 11}}>
                    CLASSES UNATTENDED
                  </Typography>
                </div>
              </div>
        </div>
        <div className={classes.bigBox}>
                  <Typography
                    variant="h5"
                    className={classes.boxHeading}
                    style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, color: '#000' }}
                  >
                    Calendar
                  </Typography>
                  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={classes.calendarContainer}>
                      <Calendar value={currentDate} tileClassName={tileClassName} />
                    </div>
                  </div>
                </div>
        <div className={classes.regularBox}>
        <Typography variant="h6" className={classes.tileHeadings} component="h2">
           Attendance
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
           />
        </div>
        </div>
        <div className={classes.regularBox}>
          <div className={classes.notificationContainer}>
            <div>
              <Typography variant="h4" className={classes.heading} style={{ fontSize: 26, marginBottom: '10px' }}>
                Notification Center
              </Typography>
              {showNotifications ? (
                <>
                  <Typography variant="body1">
                    <p className={classes.notification}>Your leave on 21st September 2023 is approved by Ms.Rachel Baker.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>Alert : Your attendance percentage decreased to 80%.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>You are absent on 18th of August.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>Your leave on 18th August is denied by Ms.Rachel Baker.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>Alert : Your attendance percentage decreased to 83%.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>You are absent on 6th of August.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>Alert : Your attendance percentage decreased to 86%.</p>
                    <hr style={{ width: '360px' }} />
                    <p className={classes.notification}>You are absent on 15th of July.</p>
                    <hr style={{ width: '360px' }} />
                  </Typography>
                  <Button variant="contained" onClick={handleClearAll} className = {classes.clearButton}>
                    Clear All
                  </Button>
                </>
              ) : (
                <Typography variant="body1" className={classes.notification} style={{ textAlign: 'center', color:'black', marginTop: '110px', marginLeft: '105px', }}>
                      NO NEW NOTIFICATIONS
                </Typography>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Dashboard;