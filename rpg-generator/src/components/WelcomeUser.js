import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#ccc',
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
    isAuthenticated && 
      <Box className={classes.root} p={2}>
        <Typography>Welcome to the rpg Planner {user.name}</Typography>
     </Box>
    )
};

export default WelcomeUser;