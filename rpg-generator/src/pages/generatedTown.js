import RandomTown from '../components/randomTown';

//MUI layout
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(2),
      background: '#ccc',
      height: '100%',
      width: '100%',
    },
    randomText: {
        fontSize: '25pt',
        padding: theme.spacing(2),
    },
  }));

function GeneratorPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid item lg={2} xs={1}></Grid>  
                
                    <Grid item lg={8} xs={10} className={classes.randomText}>
                        <RandomTown />
                    </Grid>

                    <Grid item xs={1} lg={2}></Grid>
                </Grid>

        </div>
    )
}

export default GeneratorPage;