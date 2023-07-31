import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mui/material';
import { CalendarToday, ArrowDropDown } from '@mui/icons-material';

const DateRangePickerFunc = () => {
  const [startDate, setStartDate] = useState(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const buttonStyle = {
      color: 'black',
      backgroundColor: '#fff',
      fontSize: 13,
      fontFamily: 'Poppins',
      height: '32px',
      width: '300px',
    };
  const logDateRange = () => {
    const formattedStartDate = startDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const formattedEndDate = endDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    console.log(`Start date: ${formattedStartDate}`);
    console.log(`End date: ${formattedEndDate}`);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px'}}>
        <span style={{ marginRight: '10px', marginLeft:'30px', fontSize: 18, fontFamily: 'Poppins' }}>DATE : </span>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="MMM dd yy"
          customInput={
            <Button variant="outlined" size="small" style={buttonStyle} startIcon={<CalendarToday />}>
              {startDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
              <ArrowDropDown style={{ marginLeft: '5px' }} />
            </Button>
          }
        />
        <span style={{ marginRight: '10px', marginLeft:'10px' }}> - </span>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="MMM dd"
          customInput={
            <Button variant="outlined" size="small" style={buttonStyle} startIcon={<CalendarToday />}>
              {endDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
              <ArrowDropDown style={{ marginLeft: '5px' }} />
            </Button>
          }
        />
      </div>
      <Button variant="contained" onClick={logDateRange} style={{ backgroundColor:'#F47458'}} >GET DATA</Button>
    </div>
  );
};

export default DateRangePickerFunc;