import RandomTown from '../components/randomTown';

//MUI layout
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Importing components
import SignUp from '../components/SignUp';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#ccc',
      height: '100%',
      width: '100%',
    },
    randomText: {
        padding: theme.spacing(2),
    },
  }));

function GeneratorPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid item md={2} xs={12}>
                    <SignUp />
                </Grid>  
                
                    <Grid item md={8} xs={12} className={classes.randomText}>
                        <RandomTown />
                    </Grid>

                    <Grid item xs={12} md={2}>
                    </Grid>
                </Grid>

        </div>
    )
}

export default GeneratorPage;