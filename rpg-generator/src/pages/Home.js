import React from "react";

//import components
import SignUp from '../components/SignUp';
import ListAllEntries from '../components/ListAllEntries';

//MUI layout
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#ccc',
      height: '100%',
      width: '100%',
    },
  }));



//Render Most recent 10 posts from the database here.
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <SignUp />
        </Grid>
        <Grid item md={8}>
            <ListAllEntries />
        </Grid>
        <Grid item xs={12} md={2}>
          
        </Grid>
    </Grid>
  </div>
  );
};

export default Home;