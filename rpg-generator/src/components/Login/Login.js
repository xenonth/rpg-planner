import React from 'react';

import LoginBtn from './LoginBtn';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default function Login() {

    const classes = useStyles();
  return(
    <div>
        <h1  className={classes.loginWrapper}>
            Please Log In
        </h1>
        
        <form>
        
            <label>
                <p>Username</p>
                <input type="text" />
            </label>

            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>

                <LoginBtn />
            </div>
        </form>
    </div>
  )
}