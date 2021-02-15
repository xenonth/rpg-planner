import React from 'react';

//MUI layout
import { makeStyles } from '@material-ui/core/styles';

import Login from './Login/Login';

// eslint-disable-next-line 
import LogoutBtn from './LogoutBtn';

const useStyles = makeStyles({
    root: {
        padding: '10px',
        background: '#ccc',
    }
})
//Login react page using online examples
function SignIn () {
    const classes = useStyles();
    return (
            <section className={classes.root}> 
                <Login />
                
                <LogoutBtn />
            </section>
            
                
            
        
    )
}

export default SignIn;