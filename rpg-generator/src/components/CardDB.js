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
    spanText: {
        fontWeight: "bold",
      },
      sectionGap: {
        margin: '1%',
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
                <Typography  className={classes.sectionGap} component={'section'}>
                   <span className={classes.spanText}>Government:</span> {government}
                </Typography>

                <Typography  className={classes.sectionGap} component={'section'}>
                <span className={classes.spanText}>Settlement Size:</span> {type}
                </Typography>

                <Typography  className={classes.sectionGap} component={'section'}>
                <span className={classes.spanText}>Population:</span> {size}
                </Typography>

                <Typography  className={classes.sectionGap} component={'section'}>
                <span className={classes.spanText}>Majority Race:</span> {race}
                </Typography>

                <Typography  className={classes.sectionGap} component={'section'}>
                <span className={classes.spanText}>Description:</span> {description}
                </Typography>

                <Typography  className={classes.sectionGap} component={'section'}>
                <span className={classes.spanText}>Event:</span> {happening}
                </Typography>
          </CardContent>
        </Card>
    )
}

export default CardDB;