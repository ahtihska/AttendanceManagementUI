import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, List, ListItem, ListItemText, ListItemIcon, ListItemButton, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100%)',
  },
  name: {
    fontFamily: 'Poppins',
    fontWeight: '400px',
    color: 'black',
    fontSize : 15,
  },
  attendance: {
        fontFamily: 'Poppins',
        fontWeight: 'BOLD',
        color: 'black',
        fontSize : 15,
  },
  noofdays: {
    fontFamily: 'Poppins',
    fontWeight: 'BOLD',
    color: 'black',
    fontSize : 15,
  },
  days: {
      fontFamily: 'Poppins',
      fontWeight: 'BOLD',
      color: '#CDCDCD',
      fontSize : 10,
      opacity:0.5,
  },
}));

const ClassLeastAttendance = () => {
     const classes = useStyles();

  return (
    <div>
        <List>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
             <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
             <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
             <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
             <Divider/>
            <ListItem className={classes.listItem}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                       <Typography className={classes.name}>Bryan Adams</Typography>
                    </Grid>
                    <Grid item xs={4}>
                       <Typography className={classes.attendance}>100%</Typography>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Typography className={classes.noofdays}>21</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.days}>DAYS</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    </div>
  );
};

export default ClassLeastAttendance;