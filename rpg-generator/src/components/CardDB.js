import React from 'react';

//imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import files from Card


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
        fontSize: '25pt',
        textAlign: "center",
        background: "#BFE3B4",
    },
  });


function CardDB (props) {
    const name = props.name;
    const government = props.government;
    const type = props.type;
    const size = props.size;
    const description = props.description
    const happening = props.happening;
    const race = props.race
    //function to call styles
    const classes = useStyles();

    
    return (
        <Card variant="outlined" className={classes.root}>
            <Typography className={classes.title} component={'section'}>
                {name.toUpperCase()}
            </Typography>
            <CardContent className={classes.body} >
                <Typography component={'section'}>
                    Government: {government}
                </Typography>
                <Typography component={'section'}>
                    Settlement Size: {type}
                </Typography>
                <Typography component={'section'}>
                    Population: {size}
                </Typography>
                <Typography component={'section'}>
                    Majority Race: {race}
                </Typography>
                <Typography component={'section'}>
                    Description:{description}
                </Typography>
                <Typography component={'section'}>
                    Event: {happening}
                </Typography>
          </CardContent>
        </Card>
    )
}

export default CardDB;