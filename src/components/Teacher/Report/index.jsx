import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import percentagePic from "../../../images/percentagePic.jpeg";
import { Grid, Button } from '@material-ui/core';
import { PieChart } from '@mui/x-charts/PieChart';
import AttendanceReport from "./AttendanceReport.jsx";
import DateRangePickerFunc from "./DateRangePickerFunc.jsx";
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';;

const useStyles = makeStyles((theme) => ({
  root: {
//     backgroundColor: '#0F1E23',
    minHeight: '100vh',
    color: '#fff',
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
    marginTop: theme.spacing(4),

  },
  bigBox: {
    width: 'calc(70%)',
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
    width: 'calc(28%)',
    height: '350px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
    borderRadius: '10px',
    overflow: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  notificationContainer:{
     display: 'flex',
         flexDirection: 'column',
         alignItems: 'left',
         fontFamily: 'Poppins',
         fontSize: 11,
         color: 'black',
         overflow: 'hidden',
         paddingTop: theme.spacing(3),
         paddingLeft: '10px',

  },
    chartContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',


    },
  absenteesContainer: {
     display: 'flex',
         flexDirection: 'column',
         alignItems: 'left',
         fontFamily: 'Poppins',
         fontSize: 11,
         color: 'black',
         overflow: 'auto',
         paddingTop: '40px',
         paddingLeft: '10px',
  },
  boxContainer: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    overflow: 'auto'
  },

}));

const Report = () => {
  const classes = useStyles();

  const [section, setSection] = React.useState('');
  const handleChange = (event) =>
        {
            setSection(event.target.value);
            console.log('Selected option:', event.target.value);
        };
  const classOptions = [{ class_id: 'XA' }, { class_id: 'XB' }, { class_id: 'XC' }];


  return (
    <div className={classes.root}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                    <DateRangePickerFunc/>
                </Box>
            <Box sx={{ width:'100%', flex: '1', marginLeft: '50px' }} className={classes.boxContainer} >
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Class</InputLabel>
                  <Select
                    value={section}
                    onChange={handleChange}
                    label="Select Class"
                    style={{ backgroundColor: '#fff', color: 'black', minWidth: 150 }}
                  >
                    {classOptions.map((option) => (
                      <MenuItem key={option.class_id} value={option.class_id}>
                        {option.class_id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
            </Box>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.bigBox}>
                <div className={classes.notificationContainer}>
                     <AttendanceReport type="main" />
                </div>
            </div>
            <div className={classes.regularBox}>
                <div className={classes.chartContainer}>
                    <AttendanceReport type="pie" />
                </div>
            </div>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.biggestBox}>
                <div className={classes.absenteesContainer}>
                     <AttendanceReport type="low" />
                </div>
            </div>
        </div>
    </div>


  );
};

export default Report;

