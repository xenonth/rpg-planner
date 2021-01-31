import React, { Component } from 'react';

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
    
      console.log(this.state.townValue);
      console.log(this.state.governValue);
      console.log(this.state.typeValue);
      console.log(this.state.descriptionValue);
      console.log(this.state.raceOneValue);

     console.log(this.state.percentageOneValue);

      console.log(this.state.otherValue);
      //Code to check that the population field is a number or integer
        //if this.state.popvalue !== Number convert number or alert to reenter a value
    this.addToDB();
  }

  

  //code for an API function to send a post request to the API in the object layout
  addToDB = () => {
    const numberOfRaces = parseInt(this.state.numberOfRacesValue);
    const percentageOne = parseInt(this.state.percentageOneValue);

    //race object array to send to db
    const raceOneObject = {
      raceOne: this.state.raceOneValue,
      percentage: percentageOne,
    }
        //Validation for all input fields
        let settlementArray = [
          this.state.townValue,
          this.state.typeValue,
          this.state.populationValue,
          this.state.descriptionValue,
          this.state.numberOfRacesValue,
          this.state.raceOneValue,
          this.state.percentageOneValue,
          this.state.otherValue,
        ]
        //talk to Trent about it!!
        for (let i = 0; i < settlementArray.length; i++) {
          if (i === undefined) {
            console.log(settlementArray[i])
            alert(`Submission failed. Please ensure all data fields are filled out`);
          }
        }

    let postSettlement = {
      name: this.state.townValue,
      type: this.state.typeValue,
      size: this.state.populationValue,
      description: this.state.descriptionValue,
      population: {
        numberOfRaces: numberOfRaces,
        races: [raceOneObject]
      },
      otherInformation: this.state.otherValue,
    }



    console.log(postSettlement)
    API.saveSettlement(postSettlement).then((res => {
      console.log(res)
    }))
  }

  //look into dropping percentage in the schema as it is not currently being used

  render() {
    return (
      <div>
        <form autocomplete="on">
             
          <label for='townValue'>Town Name</label>
          <br></br>
            <input type='text' name='townValue' id='townValue' placeholder="Settlement Name" value={this.state.townValue} onChange={this.handleChange} required/>
            <br></br>

          
            <label for='governValue'>Government</label>
            <br></br>
            <input name='governValue' id='governValue' placeholder="How is Your Town Ruled" value={this.state.governValue} onChange={this.handleChange} required/>
            <br></br>
            <label for='typeValue'>Type</label>
            <br></br>
            <input name='typeValue' id='typeValue' placeholder="Is it a hamlet, farming-community, village, town, city, monastic order?" value={this.state.typeValue} onChange={this.handleChange} required/>
            <br></br>
          
            <label>Population</label>
            <br></br>
            <input type="number" name='populationValue' placeholder="How many people live in your settlement?" value={this.state.populationValue} onChange={this.handleChange} required/>
            <br></br>

            <label for='descriptionValue'>Description:</label>
            <br></br>
            <textarea cols="50" rows="4" placeholder="What does your settlement look like?" id='descriptionValue' name='descriptionValue' type="text" value={this.state.descriptionValue} onChange={this.handleChange} required/>    
            <br></br>
          
            <label for='numberOfRacesValue'>How Many Races Live in Your Settlement?</label>
            <br></br>
            <input min='1' max='5' id='numberOfRacesValue' name='numberOfRacesValue' type="number" value={this.state.numberOfRacesValue} onChange={this.handleChange} required/>
            <br></br>     

            <label for='raceOneValue'>Dominant Race name which lives in the settlement?</label>
            <br></br>
            <input id='raceOneValue' name='raceOneValue' placeholder="Race Name" value={this.state.raceOneValue} onChange={this.handleChange} required/>
            <br></br>

            <label for='percentageOneValue'>Percentage:</label>
            <br></br>
            <input name='percentageOneValue' type="number" min='1' max='100' placeholder="Percentage of the majority race which lives in this town." value={this.state.percentageOneValue} onChange={this.handleChange} required/>
            <br></br>

            <label for='otherValue'>Other Information:</label>
            <br></br>
            <textarea type="text" id='otherValue' name='otherValue' cols="50" rows="4" placeholder='Key NPCS, events, Other Races Which live here, what is that shifty blind man up to?' value={this.state.otherValue} onChange={this.handleChange} required/>
            <br></br>
          <SubmitBtn onClick={this.handleSubmit} />
        </form>
    </div>
    )
    
  }
}

export default CreateForm;