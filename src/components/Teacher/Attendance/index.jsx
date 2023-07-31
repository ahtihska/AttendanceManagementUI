import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import ReactDom from 'react-dom';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import {Button,Box , List,Switch, ListItem,ListItemText,ListItemIcon,ListItemButton,Divider, FormGroup} from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialTable from 'material-table';
import {styled} from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material';
import { CheckBox } from '@material-ui/icons';
import axios from 'axios';







const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0F1E23',
    color: '#fff',
    padding: theme.spacing(2),
    posotion: 'fixed',
    width: '100%'
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
    marginLeft : theme.spacing(2),
    marginRight : theme.spacing(3),
  },
  mediumBox: {
    width: 'calc(39%)',
    height: '250px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginLeft : theme.spacing(1),
    borderRadius: '10px'
  },
  regularBox: {
    width: 'calc(55.33% - 30px)',
    height: '420px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: '10px',
    overflow: 'scroll',
    
  },
  regBox: {
    width: 'calc(45.33% - 30px)',
    height: '420px',
    backgroundColor: '#fff',
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: '10px',
    overflow: 'scroll',
  },
  smallBox: {
      width: 'calc(100% - 10px)',
      height: '150px',
      backgroundColor: '#fff',
      marginBottom: theme.spacing(2),
      marginLeft : theme.spacing(1),
      borderRadius: '10px'
    },
    
    classItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
      borderBottom: '1px solid #CFCFCF',
      textAlign: 'left',
    },
    className: {
      marginRight: theme.spacing(2),
      fontFamily: 'Poppins',
      fontWeight: 600,
      color: '#000',
      fontSize: 20,
      alignSelf: 'center',
      textAlign: 'right',
    },
  
  summaryContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(6),
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(4),
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
  containerStyle :{
    display: 'flex',
    flexDirection: 'column',
  },
  elementStyle :{
    marginBottom: '10px',
    fontFamily: 'Poppins',
    fontSize : 22,
    fontWeight: 'medium',
    margin: theme.spacing(6),
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(3),
  },
  butticon:{
    marginLeft : theme.spacing(30),
    marginRight: theme.spacing(6),
    marginTop: theme.spacing(-8),
    alignSelf: 'right',
  },
  syles:{
    width: '100px',
    height:'100px',
    overflow: 'scroll'
   
},
  schoolitem:{
    color: '#ff5722',
   
  },
  items:{
        fontFamily: 'Poppins',
        fontSize : 20,
        color: 'black',
     marginTop: theme.spacing(1),
  },

  
}));

const Dashboard = () => {
  const classes = useStyles();
  const defaultMaterialTheme = createTheme();
  
  const [selectedOption, setSelectedOption] = useState('');
  const [studentsData, setStudentsData] = useState([]);
  const [post,setPost] = useState(false);
  const [data, setData] = useState(null);
  const [studentid,setStudentid] = useState("");
  

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);


    // Assuming your JSON server URL is 'https://example.com/data' and the data is available under different endpoints based on the selected option.
    
  };
 
 
  
  
 
  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const fetchData = async () => {
    try {
      
      const response = await axios.get(`http://localhost:4000/${selectedOption}`);
      console.log("response", response)

      setStudentsData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const columns = [
    { title: 'Roll No', field: 'rno', editable: 'never' },
    { title: 'Name', field: 'name', editable: 'never' },
    {
      title: 'Status',
      field: 'Status',
      type: 'boolean',
       // Checkbox column
      render: (rowData) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={rowData.Status}
              onChange={() => handleCheckboxChange(rowData.id)}
            />
          }
          label=""
        />
      ),
    },
  ];
  const handleCheckboxChange = (id) => {
    setStudentid(id)
    setStudentsData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, Status: !row.Status } : row
      )
    );
  };

  
  const handleAttendanceUpdate = async (newData) => {
    try {
      // Update attendance record in the JSON server
      await axios.put( `http://localhost:4000/${selectedOption}/${studentid}`
      ,studentsData.filter(student => student.id == studentid)[0]);
      setPost(true)
      
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };
  
  const [absenteesData, setAbsenteesData] = useState([]);
  useEffect(() => {
   if (post){
    setPost(false)
    fetchnewData();}
  }, [post]);
  useEffect(() => {
    
    handleAttendanceUpdate(studentsData);
  }, [studentsData]);

  // Fetch absentees data from the JSON server
  const fetchnewData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/${selectedOption}`, {
        params: {
          Status: false, // Fetch only absent students
        },
      });
      setAbsenteesData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const Columns = [
    { title: 'Roll No', field: 'rno', editable: 'never' },
    { title: 'Name', field: 'name', editable: 'never' },
    {
      title: 'Status',
      field: 'Status',
      render:(rowData)=>{
        return rowData.Status? "Present":"Absent"
      }
      
    },
  ];

 
    // Your save logic goes here
    // //useEffect(() => {
    //   //handleSave();
      
    // }, [selectedOption] );
  
    const handleSave = () => {
      //console.log(selectedOption)
      //axios.get(`http://localhost:4000/${selectedOption}`)
      //.then(response => {
       // setData(response.data); // Assuming the response data is an array of objects
       // console.log(response)
      //})
      //.catch(error => {
      //  console.error('Error fetching data from source server:', error);
      //});
   // }
   // if (data) {
      //axios.post(`http://localhost:4001/students`, data)
       // .then(response => {
          // Handle success response
        //  console.log('Data transferred successfully!', response);
          //axios.get(`http://localhost:4001/studentsA`);
       // })
        //.catch(error => {
          // Handle error
        //  console.error('Error sending data to destination server:', error);
       // });
  //  } else {
   //   console.error('No data to send.');
   const updatedAttendance = studentsData.map(stu => ({
    id: stu.id,
    name: stu.name,
    isPresent: stu.Status
   }));
   axios.post('http://localhost:4001/students',updatedAttendance)
   .then(response => {
    console.log('success',response.data);
   })
   .catch(error => {

   });
    
  };
        

  return (
    
    <div className={classes.root}>
    
      <div className={classes.bodyContainer}>
        <div className={classes.smallBox}>
            <div className={classes.summaryContainer}>
            <InputLabel id="dropdown-label">Select Class</InputLabel>
            <Select
                  
                  value={selectedOption}
                  onChange={handleChange}
                    >
        <MenuItem value="StudentsA">Class X A</MenuItem>
        <MenuItem value="StudentsB">Class X B</MenuItem>
       
      </Select>
           
                
                
              </div>
        </div>
        
        
        <div className={classes.regularBox}>
            
        <div style={{ width: '100%', height: '100%' }}>
        <ThemeProvider theme={defaultMaterialTheme}>
       
        <MaterialTable
          title="Attendance Record"
          columns={columns}
          data={studentsData}
         
          

      
    />
    <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
                   
        </ThemeProvider>

 
            </div>
                

              

                        

              
              </div>
              <div className={classes.regBox}>
              <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                  title="Absentees List"
                  columns={Columns}
                  data={absenteesData}
                 />
                   </ThemeProvider>

       
                        
                       
                        
                        
                        
                        
                    
              
                
             
              </div>
              

              
                 

        </div>
        
        
        
        <div>
          
        
        </div>
        
        
        
         
            
          
        
        </div>
    
  );
};

export default Dashboard;
