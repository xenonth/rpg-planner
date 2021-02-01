import RandomTown from '../components/randomTown';

//MUI layout
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function GeneratorPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid item lg={2} xs={12}></Grid>  
                
                    <Grid item lg={8} xs={12}>
                        <RandomTown />
                    </Grid>

                    <Grid item xs={12} lg={2}></Grid>
                </Grid>

        </div>
    )
}

export default GeneratorPage;