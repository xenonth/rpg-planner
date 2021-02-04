import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    sidePaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      fontSize: '20pt',
      color: theme.palette.text.secondary,
    },
}));

const WelcomeUser = () => {
    const classes = useStyles()
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
                <Box clasName={classes.sidePaper} p={2}>
                    <Typography>Welcome to the rpg Planner {user.name}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={10}></Grid>
        </Grid>
    </div>
    )
  );
};

export default WelcomeUser;