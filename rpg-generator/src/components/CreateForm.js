import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

import API from '../utils/API';

//import btn component 
//Attempted importing a form component but would not work with the value attribute
import SubmitBtn from './SubmitBtn'

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
    alert('You have submitted the form.');
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
        majorityRace: this.state.raceOneValue,

      },
      otherInformation: this.state.otherValue,
      author
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
        <Form>
          
            <Form.Group>
              <Form.Label>Town Name</Form.Label>
              <Form.Control as='input' name='townValue' placeholder="Settlement Name" value={this.state.townValue} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Government</Form.Label>
              <Form.Control as='input' name='governValue' placeholder="How is Your Town Ruled" value={this.state.governValue} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control as="input" name='typeValue' placeholder="What size category is your settlement?" value={this.state.typeValue} onChange={this.handleChange} />
              <Form.Text className="text-muted">
                Is it a hamlet, farming-community, village, town, city, monastic order?.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Population</Form.Label>
              <Form.Control as="input" name='populationValue' placeholder="How many people live in your settlement?" value={this.state.populationValue} onChange={this.handleChange} />
              <Form.Text className="text-muted">
                Please type a whole integer, number, value for the above text field.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={5} name='descriptionValue' type="text" value={this.state.descriptionValue} onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                What does your settlement look like?
            </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>How Many Races Live in Your Settlement?</Form.Label>
              <Form.Control as="input" name='numberOfRacesValue' type="number" value={this.state.numberOfRacesValue} onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                What does your settlement look like?
            </Form.Text>
            </Form.Group>
            
            
            <Form.Group>
              <Form.Label>Dominant Race name which lives in the settlement?</Form.Label>
              <Form.Control as='input' name='raceOneValue' placeholder="Race Name" value={this.state.raceOneValue} onChange={this.handleChange}/>
            </Form.Group>

              <Form.Group controlId="percentageRaceOne">
              <Form.Label>Percentage:</Form.Label>
              <Form.Control as='input' name='percentageOneValue' placeholder="percentage representation" value={this.state.percentageOneValue} onChange={this.handleChange}/>
              <Form.Text className="text-muted">
              Percentage of the morjity race which lives in this town.
            </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Other Information:</Form.Label>
              <Form.Control as="textarea" rows={5} type="text" name='otherValue' value={this.state.otherValue} onChange={this.handleChange} />
              <Form.Text className="text-muted">
              Key NPCS, events, Other Races Which live here, what is that shifty blind man up to?
            </Form.Text>
            </Form.Group>
            <SubmitBtn onClick={this.handleSubmit}/>
        </Form>



      </div>
    )
    
  }
}

export default CreateForm;