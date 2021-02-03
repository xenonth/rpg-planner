import React from 'react';

//MUI layout
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Login from '../components/Login/Login';

import LogoutButton from '../components/LogoutBtn'

const useStyles = makeStyles({
    root: {
        padding: '20px',
    }
})
//Login react page using online examples
function SignUp () {
    const classes = useStyles();
    return (
        <Grid container>
            <Paper className={classes.root}>
                <Login />
            </Paper>
            <Paper className={classes.root}>
                <LogoutButton />
            </Paper>
        </Grid>
    )
}

export default SignUp;