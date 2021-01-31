import React from "react";
//Material UI interface

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CreateForm from '../components/CreateFormBasic';
//<Paper variant="outlined" square />
//Render Most recent 10 posts from the database here.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sidePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperForm: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background: 'blue'
  },
}));

const SubmitIdea = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container fixed spacing={2}>
      <Grid item xs={12}></Grid>
        <Grid item xs={12} md={2}>
          <Paper className ={classes.sidePaper}>Add Your Own Idea to the system for others to explore and view!</Paper>
        </Grid>
        <Grid md={8}>
          <Paper className ={classes.paperForm}><CreateForm /></Paper>
        </Grid>
        <Grid xs={12} md={2}></Grid>
      </Grid>
      </div>
  );
};

export default SubmitIdea;