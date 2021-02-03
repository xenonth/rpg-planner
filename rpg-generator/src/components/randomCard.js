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
      background: "green",
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
    <Typography className={classes.title} placeholder="Town Name Here">
        {name}
    </Typography>

    <CardContent className={classes.body}>
      <Typography  component={'section'}>
        Government: {government}
      </Typography>
      <br></br>
      <Typography component={'section'}>
          Settlement Size:{type}
      </Typography>
      <br></br>
      <Typography component={'section'}>
        Population: {size}
      </Typography>
      <br></br>
      <Typography component={'section'}>
          Inhabitants: <InhabitantItem races={props.races} />
      </Typography>
      <br></br>
      <Typography component={'section'}>
          Description:{description}
      </Typography>
      <br></br>
      <Typography component={'section'}>
        Event: {happening}
      </Typography>
    </CardContent>
     <Typography component={'div'} className={classes.footer}>
      <GenerateTown onClick={props.onClick}>GENERATE TOWN</GenerateTown>
    </Typography>
  </Card>
  );
}

export default RandomCard