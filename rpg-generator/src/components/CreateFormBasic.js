import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

import API from '../utils/API';
import SubmitBtn from './SubmitBtn'

//import btn component 
//Attempted importing a form component but would not work with the value attribute



class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      townValue: '',
      governValue:'',
      typeValue: '',
      populationValue: '',
      numberOfRacesValue: '',
      descriptionValue: '',
      raceOneValue: '',
      percentageOneValue: '',
      otherValue: '',
      authorValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //setState
  //type code here to actively update the state based on the value of the different fields. 

  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
      //Code to check that the population field is a number or integer
        //if this.state.popvalue !== Number convert number or alert to reenter a value
    this.addToDB();
  }

  

  //code for an API function to send a post request to the API in the object layout
  addToDB = () => {
    const numberOfRaces = parseInt(this.state.numberOfRacesValue);
    const percentageOne = parseInt(this.state.percentageOneValue);

    let postSettlement = {
      name: this.state.townValue,
      type: this.state.typeValue,
      size: this.state.populationValue,
      govern: this.state.governValue,
      description: this.state.descriptionValue,
      population: {
        numberOfRaces: numberOfRaces,
        majorityRace: this.state.raceOneValue,
        majorityPercentage: percentageOne
      },
      otherInformation: this.state.otherValue,
      author: this.state.authorValue
    }



    console.log(postSettlement)
    API.saveSettlement(postSettlement).then((res => {
      alert(`Your Settlement ${res.data.name} has been added to the database`);
    })
    ).catch((error => {
      alert(`${error} encountered please try again later`)
    }))
  }

  //look into dropping percentage in the schema as it is not currently being used

  render() {
    return (
      <div>
        <form autoComplete='on'>
        <Box m={2}>
          <label htmlFor='townValue'>Town Name</label>
          <br></br>
            <input type='text' name='townValue' id='townValue' placeholder="Settlement Name" value={this.state.townValue} onChange={this.handleChange} required/>
            <br></br>
          </Box>

          <Box m={2}>
            <label htmlFor='governValue'>Government</label>
            <br></br>
            <input name='governValue' id='governValue' placeholder="How is Your Town Ruled" value={this.state.governValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>

            <Box m={2}>
            <label htmlFor='typeValue'>Type</label>
            <br></br>
            <input name='typeValue' id='typeValue' placeholder="Is it a hamlet, farming-community, village, town, city, monastic order?" value={this.state.typeValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>
          
            <Box m={2}>
            <label>Population</label>
            <br></br>
            <input type="number" name='populationValue' placeholder="How many people live in your settlement?" value={this.state.populationValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>

            <Box m={2}>
            <label htmlFor='descriptionValue'>Description:</label>
            <br></br>
            <textarea cols="50" rows="6" placeholder="What does your settlement look like?" id='descriptionValue' name='descriptionValue' type="text" value={this.state.descriptionValue} onChange={this.handleChange} required/>    
            <br></br>
            </Box>
          
            <Box m={2}>
            <label htmlFor='numberOfRacesValue'>How Many Races Live in Your Settlement?</label>
            <br></br>
            <input min='1' max='5' id='numberOfRacesValue' name='numberOfRacesValue' type="number" value={this.state.numberOfRacesValue} onChange={this.handleChange} required/>
            <br></br>  
            </Box>   

            <Box m={2}>
            <label htmlFor='raceOneValue'>Dominant Race name which lives in the settlement?</label>
            <br></br>
            <input id='raceOneValue' name='raceOneValue' placeholder="Race Name" value={this.state.raceOneValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>
            <Box m={2}>
            <label htmlFor='percentageOneValue'>Percentage:</label>
            <br></br>
            <input name='percentageOneValue' type="number" min='1' max='100' placeholder="Percentage of the majority race which lives in this town." value={this.state.percentageOneValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>
            
            <Box m={2}>
            <label htmlFor='otherValue'>Other Information:</label>
            <br></br>
            <textarea type="text" id='otherValue' name='otherValue' cols="50" rows="6" placeholder='Key NPCS, events, Other Races Which live here, what is that shifty blind man up to?' value={this.state.otherValue} onChange={this.handleChange} required/>
            <br></br>
            </Box>

            <label htmlFor='authorValue'>By</label>
            <br></br>
            <input id='authorValue' name='authorValue' placeholder="Author Name Here" value={this.state.authorValue} onChange={this.handleChange} required />
            <br></br>

            <SubmitBtn onClick={this.handleSubmit}/>
        </form>
    </div>
    )
    
  }
}

export default CreateForm;