import React from 'react';

//imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//imported from components file
import InhabitantItem from './inhabitantItem';
import GenerateTown from './randomBtn';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1%',
  },

  title: {
    fontSize: '20pt',
    fontWeight: 'bold',
    textAlign: "center",
  },

  spanText: {
    fontWeight: "bold",
  },
  body: {
      fontSize: '30pt',
      textAlign: "center",
      background: "#BFE3B4",
  },
  sectionGap: {
    margin: '1%',
  },
  
  footer: {
      textAlign: "center",
      marginTop: 8,
      marginBottom: 10,
  },
});

function RandomCard(props) {
    const name = props.name;
    const government = props.government;
    const type = props.type;
    const size = props.size;
    const description = props.description
    const happening = props.happening;

  const classes = useStyles();
  
  return (
    <Card variant="outlined" className={classes.root}>
    <Typography className={classes.title} placeholder="Town Name Here" component={'h5'}>
        {name}
    </Typography>

    <CardContent className={classes.body}>
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
      <span className={classes.spanText}>Inhabitants:</span> 
        <InhabitantItem races={props.races} />
      </Typography>
      <br></br>
      <Typography  className={classes.sectionGap} component={'section'}>
      <span className={classes.spanText}>Description:</span> {description}
      </Typography>
      
      <Typography  className={classes.sectionGap} component={'section'}>
      <span className={classes.spanText}>Event:</span> {happening}
      </Typography>
    </CardContent>
     <Typography component={'div'} className={classes.footer}>
      <GenerateTown onClick={props.onClick}>GENERATE TOWN</GenerateTown>
    </Typography>
  </Card>
  );
}

export default RandomCard