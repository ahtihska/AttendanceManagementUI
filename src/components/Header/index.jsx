import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import downArrow from "../../images/downArrow.png";
import profilePic from "../../images/profilePic.jpeg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0F1E23',
    height: 80,
    borderBottom: `1px solid #2C3537`,
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(4)
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),
  },
  appName: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    flex: 1,
    fontWeight: 'light',
    marginLeft: theme.spacing(2),
  },
navButtons: {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
  '& > *:not(:last-child)': {
    marginRight: theme.spacing(2),
  },
  '& > *:nth-child(3)': {
    marginLeft: theme.spacing(2),
  },
   '& > *:last-child': {
     marginLeft: theme.spacing(2), // Add spacing to the last button
   },
},

  navButton: {
    textTransform: 'none',
    color: '#fff',
    marginRight: theme.spacing(2),
    fontFamily: 'Poppins',
    fontWeight: 'regular',
    position: 'relative',
    textDecoration: 'none',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '4px',
      bottom: '-36px',
      backgroundColor: '#F47458',
      left: 0,
      opacity: 0,
      transition: 'opacity 0.3s',
    },
    '&:hover::after': {
      opacity: 1,
      backgroundColor: '#F47458',
    },
    '&:hover': {
      color: '#F47458',
    },
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: theme.spacing(0.5, 1),
  },
  searchIcon: {
    color: 'grey',
    marginRight: theme.spacing(1),
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#A09D9D',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dropdownButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  dropdownIcon: {
    color: '#fff',
  },
  downArrowIcon: {
    width: 18,
    height: 18,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.appBar}>
      <Toolbar>
        <div className={classes.headerContent}>
          <div className={classes.logoContainer} style={{ marginTop: '6px' }}>
            <img src={logo} alt="Logo" className={classes.logo} />
            <Typography variant="h5" className={classes.appName} style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#fff', flex: 1 }}>
               Attend
             </Typography>
          </div>
          <div className={classes.navButtons} style={{ marginTop: '6px', fontFamily: 'Poppins' }}>
            <Typography
              variant="body1"
              component={Link}
              to="/"
              className={classes.navButton}
              style={{ marginLeft: '16px', fontFamily: 'Poppins' }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/Attendance"
              className={classes.navButton}
              style={{ marginLeft: '16px', fontFamily: 'Poppins' }}
            >
              Attendance
            </Typography>
            <Typography variant="body1" className={classes.navButton} style={{fontFamily: 'Poppins' }}>
              Substitute
            </Typography>
            <Typography variant="body1" className={classes.navButton} style={{fontFamily: 'Poppins' }}>
              Report
            </Typography>
          </div>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <input type="text" placeholder="Search" className={classes.searchInput} />
          </div>
          <div className={classes.profileContainer}>
            <Avatar src={profilePic} alt="Profile" className={classes.profilePic} />
            <Typography variant="body2" style={{ marginRight: '8px', color: '#fff' }}>
              Rachel Baker
            </Typography>
            <IconButton className={classes.dropdownButton} onClick={handleClick}>
              <img
                src={downArrow}
                alt="Dropdown"
                className={classes.downArrowIcon}
              />
            </IconButton>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </div>
  );
};

export default Header;
