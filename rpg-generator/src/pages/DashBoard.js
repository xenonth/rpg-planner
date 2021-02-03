import React from 'react';

//MUI layout
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from '../components/dashboard/Dashboard';

const useStyles = makeStyles({
    root: {
        padding: '20px',
    }
})
//Login react page using online examples
function DashBoard () {
    const classes = useStyles();
    return (
        <Grid container>
            <Paper className={classes.root}>
                <Dashboard />
            </Paper>
        </Grid>
    )
}

export default DashBoard;