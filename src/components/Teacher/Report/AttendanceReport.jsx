import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { PieChart } from '@mui/x-charts';

const sampleData = [
                     {"id": 1, "class_id": "a1", "student_id": 1, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 2, "class_id": "a1", "student_id": 2, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 3, "class_id": "a1", "student_id": 3, "teacher_id": 5001, "date": "2023-07-01", "present": false},
                     {"id": 4, "class_id": "a1", "student_id": 1, "teacher_id": 5001, "date": "2023-07-02", "present": true},
                     {"id": 5, "class_id": "a1", "student_id": 2, "teacher_id": 5001, "date": "2023-07-02", "present": false},
                     {"id": 6, "class_id": "a1", "student_id": 3, "teacher_id": 5001, "date": "2023-07-02", "present": false},
                     {"id": 7, "class_id": "a1", "student_id": 1, "teacher_id": 5001, "date": "2023-07-03", "present": true},
                     {"id": 8, "class_id": "a1", "student_id": 2, "teacher_id": 5001, "date": "2023-07-03", "present": true},
                     {"id": 9, "class_id": "a1", "student_id": 3, "teacher_id": 5001, "date": "2023-07-03", "present": false},
                     {"id": 10, "class_id": "a1", "student_id": 4, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 11, "class_id": "a1", "student_id": 5, "teacher_id": 5001, "date": "2023-07-01", "present": false},
                     {"id": 12, "class_id": "a1", "student_id": 6, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 13, "class_id": "a1", "student_id": 4, "teacher_id": 5001, "date": "2023-07-02", "present": false},
                     {"id": 14, "class_id": "a1", "student_id": 5, "teacher_id": 5001, "date": "2023-07-02", "present": true},
                     {"id": 15, "class_id": "a1", "student_id": 6, "teacher_id": 5001, "date": "2023-07-02", "present": true},
                     {"id": 16, "class_id": "a1", "student_id": 4, "teacher_id": 5001, "date": "2023-07-03", "present": true},
                     {"id": 17, "class_id": "a1", "student_id": 5, "teacher_id": 5001, "date": "2023-07-03", "present": false},
                     {"id": 18, "class_id": "a1", "student_id": 6, "teacher_id": 5001, "date": "2023-07-03", "present": true},
                     {"id": 19, "class_id": "a1", "student_id": 7, "teacher_id": 5001, "date": "2023-07-01", "present": false},
                     {"id": 20, "class_id": "a1", "student_id": 7, "teacher_id": 5001, "date": "2023-07-02", "present": false},
                     {"id": 21, "class_id": "a1", "student_id": 7, "teacher_id": 5001, "date": "2023-07-03", "present": true},
                     {"id": 22, "class_id": "a1", "student_id": 8, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 23, "class_id": "a1", "student_id": 8, "teacher_id": 5001, "date": "2023-07-02", "present": true},
                     {"id": 24, "class_id": "a1", "student_id": 8, "teacher_id": 5001, "date": "2023-07-03", "present": false},
                     {"id": 25, "class_id": "a1", "student_id": 9, "teacher_id": 5001, "date": "2023-07-01", "present": true},
                     {"id": 26, "class_id": "a1", "student_id": 9, "teacher_id": 5001, "date": "2023-07-02", "present": false},
                     {"id": 27, "class_id": "a1", "student_id": 9, "teacher_id": 5001, "date": "2023-07-03", "present": true}
];


const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(2),
  },
  tableContainer: {
      marginTop: theme.spacing(1),
  },
  pieChartContainer: {
      marginTop: theme.spacing(4),
  },
  tileHeadings: {
      fontSize: 20,
      fontFamily: 'Poppins',
      fontWeight: 700,
      color: 'black',
      padding: '10px',
      paddingTop: '5px',
  },
      chartContainer: {
      paddingTop: '15px',
  },
  sideTileHeadings: {
      fontFamily: 'Poppins',
      opacity:0.7,
      color: 'black',
  },
  cornerBox: {
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: 700,
      marginLeft: theme.spacing(100),
      textAlign: 'right',
      marginRight: '20px',
  },
  name: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      color: 'black',
      fontSize : 15,
  },
  attendance: {
      fontFamily: 'Poppins',
      fontWeight: 550,
      color: 'black',
      fontSize: 15,
      opacity: 0.8,
  },
  noOfDays: {
      fontFamily: 'Poppins',
      fontWeight: 550,
      color: 'black',
      fontSize: 15,
      opacity: 0.8,
  },
  days: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      color: '#CDCDCD',
      fontSize : 12,
      opacity:0.7,
  },
}));

const calculateStudentAttendance = (data) => {
  const studentAttendance = {};
  data.forEach((entry) => {
    const { student_id, present } = entry;
    if (!studentAttendance[student_id]) {
      studentAttendance[student_id] = {
        name: `Student ${student_id}`,
        totalDays: 0,
        totalPresentDays: 0,
      };
    }
    studentAttendance[student_id].totalDays++;
    if (present) {
      studentAttendance[student_id].totalPresentDays++;
    }
  });

  Object.values(studentAttendance).forEach((student) => {
      student.attendancePercentage = (student.totalPresentDays / student.totalDays) * 100;
    });

    return Object.values(studentAttendance);
  };

  const calculateTotalDays = (data) => {
    const uniqueDates = new Set(data.map((entry) => entry.date));
    return uniqueDates.size;
  };

  const MainAttendanceTable = ({ studentAttendanceData, totalDays }) => { const classes = useStyles();
  return (
      <div >
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" className={classes.tileHeadings} component="h2">Attendance Report</Typography>
            <Typography className={classes.sideTileHeadings} style={{ marginLeft: '600px' }}>TOTAL DAYS: <b>{totalDays}</b></Typography>
        </div>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableBody>
              {studentAttendanceData.map((student) => (
                <TableRow key={student.name}>
                  <TableCell><Typography className={classes.name}>{student.name}</Typography></TableCell>
                  <TableCell><Typography className={classes.attendance}>{student.attendancePercentage.toFixed(2)}%</Typography></TableCell>
                  <TableCell><Typography className={classes.noOfDays}>{student.totalPresentDays}</Typography></TableCell>
                  <TableCell><Typography className={classes.days}>DAYS</Typography></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  const LowAttendanceTable = ({ studentsWithLowAttendance, totalDays }) => {
    const classes = useStyles();

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" className={classes.tileHeadings} component="h2">Students with Low Attendance</Typography>
            <Typography className={classes.sideTileHeadings} style={{ marginLeft: '900px' }}>TOTAL DAYS: <b>{totalDays}</b></Typography>
        </div>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableBody>
              {studentsWithLowAttendance.map((student) => (
                <TableRow key={student.name}>
                  <TableCell><Typography className={classes.name}>{student.name}</Typography></TableCell>
                  <TableCell><Typography className={classes.attendance}>{student.attendancePercentage.toFixed(2)}%</Typography></TableCell>
                  <TableCell><Typography className={classes.noOfDays}>{student.totalPresentDays}</Typography></TableCell>
                  <TableCell><Typography className={classes.days}>DAYS</Typography></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const PieChartSection = ({ studentAttendanceData, studentsWithLowAttendance }) => {
    const classes = useStyles();

    const lowAttendancePercentage = Math.round((
        studentsWithLowAttendance.length / studentAttendanceData.length
      ) * 100);
      const normalAttendancePercentage = 100 - lowAttendancePercentage;

      const pieChartData = [
        { id: 0, value: lowAttendancePercentage, label: 'Low', color: '#000000' },
        { id: 1, value: normalAttendancePercentage, label: 'Normal', color: '#4150B7' },
      ];

    return (
      <div className={classes.pieChartContainer}>
        <Typography variant="h6" className={classes.tileHeadings} component="h2">Attendance Overview</Typography>
        <div className={classes.chartContainer}>
            <PieChart
              series={[
                {
                  data: pieChartData.map((item) => ({ ...item, percentage: item.value.toFixed(2) })),
                },
              ]}
              width={400}
              height={200}
              labels={({ datum }) => `${datum.label}: ${datum.percentage}%`}
              colorScale={pieChartData.map((item) => item.color)}
              legendSettings={{ position: 'bottom' }}

            />
        </div>
      </div>
    );
  };

  const AttendanceReport = ({ type }) => {
    const studentAttendanceData = calculateStudentAttendance(sampleData);
    const studentsWithLowAttendance = studentAttendanceData.filter(
        (student) => student.attendancePercentage < 75
      );
    const totalDays = calculateTotalDays(sampleData);

    return (
      <React.Fragment>
        {type === 'main' && <MainAttendanceTable studentAttendanceData={studentAttendanceData} totalDays={totalDays} />}
        {type === 'low' && <LowAttendanceTable studentsWithLowAttendance={studentsWithLowAttendance} totalDays={totalDays} />}
        {type === 'pie' && (<PieChartSection studentAttendanceData={studentAttendanceData} studentsWithLowAttendance={studentsWithLowAttendance} />)}
      </React.Fragment>
    );
  };

export default AttendanceReport;