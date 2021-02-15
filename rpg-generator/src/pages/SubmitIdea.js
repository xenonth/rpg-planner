import React from "react";

//Material UI components for user interface
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//imports from the components folder
import SignUp from '../components/SignUp';
import CreateForm from '../components/CreateFormBasic';

//Render Most recent 10 posts from the database here.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#ccc',
    height: '100%',
    width: '100%',
  },
  sidePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperForm: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#BFE3B4',
    fontSize: '18pt',
    margin: '1%',
  },
}));

const SubmitIdea = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
        
        <Grid item md={2} xs={12}>
          <Paper className ={classes.sidePaper}>Add Your Own Idea to the system for others to explore and view!</Paper>
            <SignUp />
        </Grid>
        
        <Grid item md={8} xs={12}>
          <Paper className ={classes.paperForm}><CreateForm /></Paper>
        </Grid>

        <Grid item md={2}>
        </Grid>
      
      </Grid>
    </div>
  );
};

export default SubmitIdea;