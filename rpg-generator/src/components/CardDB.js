import React from 'react';

//imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import files from Card
import DBRaceList from './DBRaceList';

//Material UI styles for cardDB
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '1%',
      
    },
  
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "center",
    },
    pos: {
      marginBottom: 12,
    },
    body: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        background: "blue",
    },
  });


function CardDB (props) {
    const name = props.name;
    const government = props.government;
    const type = props.type;
    const size = props.size;
    const description = props.description
    const happening = props.happening;
    //function to call styles
    const classes = useStyles();

    
    return (
        <Card variant="outlined" className={classes.root}>
            <Typography className={classes.title}>
                {name.toUpperCase()}
            </Typography>
            <CardContent className={classes.body}>
                <Typography>
                    Government: {government}
                </Typography>
                <Typography>
                    Settlement Size: {type}
                </Typography>
                <Typography>
                    Population: {size}
                </Typography>
                <Typography>
                    Inhabitants: <DBRaceList races={props.races} />
                </Typography>
                <Typography>
                    Description:{description}
                </Typography>
                <Typography>
                    Event: {happening}
                </Typography>
          </CardContent>
        </Card>
    )
}

export default CardDB;