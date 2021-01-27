import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

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
      raceTwoValue: '',
      raceThreeValue: '',
      raceFourValue: '',
      percentageOneValue: '',
      percentageTwoValue: '',
      percentageThreeValue: '',
      percentageFourValue: '',
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
      console.log(this.state.raceTwoValue);
      console.log(this.state.raceThreeValue);
     console.log(this.state.raceFourValue);
     console.log(this.state.percentageOneValue);
     console.log(this.state.percentageTwoValue);
     console.log(this.state.percentageThreeValue);
    console.log(this.state.percentageFourValue);
      console.log(this.state.otherValue);
      //Code to check that the population field is a number or integer
        //if this.state.popvalue !== Number convert number or alert to reenter a value
    this.addToDB();
  }

  //code for an API function to send a post request to the API in the object layout
  addToDB = () => {
    const numberOfRaces = parseInt(this.state.numberOfRacesValue);
    const percentageOne = parseInt(this.state.percentageOneValue);
    const percentageTwo = parseInt(this.state.percentageTwoValue);
    const percentageThree = parseInt(this.state.percentageThreeValue);
    const percentageFour = parseInt(this.state.percentageFourValue);
    let postSettlement = {
      name: this.state.townValue,
      type: this.state.typeValue,
      size: this.state.populationValue,
      population: {
        numberOfRaces: numberOfRaces,
        races: [
          {
            raceOne: this.state.raceOneValue,
            percentage: percentageOne,
          },
          {
            raceTwo: this.state.raceTwoValue,
            percentage: percentageTwo,
          }
        ]
      },
      otherInformation: this.state.otherValue,
    }

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
            
            <Form.Row>
              <Form.Group as={Col} controlId="formRaceOne" >
              <Form.Label>Race Name:</Form.Label>
              <Form.Control as='input' name='raceOneValue' placeholder="Race Name" value={this.state.raceOneValue} onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formRaceTwo" >
              <Form.Label>Race Name:</Form.Label>
              <Form.Control as='input' placeholder="Race Name" name='raceTwoValue' value={this.state.raceTwoValue} onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formRaceThree" >
                <Form.Label>Race Name:</Form.Label>
                <Form.Control as='input' placeholder="Race Name" name='raceThreeValue' value={this.state.raceThreeValue} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formRaceFour" >
                <Form.Label>Race Name:</Form.Label>
                <Form.Control as='input' placeholder="Race Name" name='raceFourValue' value={this.state.raceFourValue} onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="percentageRaceOne" >
              <Form.Label>Percentage:</Form.Label>
              <Form.Control as='input' name='percentageOneValue' placeholder="percentage representation" value={this.state.percentageOneValue} onChange={this.handleChange}/>
              <Form.Text className="text-muted">
              The percentage value representation of each race in your settlement.  Please provide a whole Integer.
            </Form.Text>
            </Form.Group>

              <Form.Group as={Col} controlId="percentageRaceTwo" >
              <Form.Label>Percentage:</Form.Label>
              <Form.Control as='input' placeholder="percentage representation" name='percentageTwoValue' value={this.state.percentageTwoValue} onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="percentageRaceThree" >
                <Form.Label>Percentage:</Form.Label>
                <Form.Control as='input' placeholder="percentage representation" name='percentageThreeValue' value={this.state.percentageThreeValue} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="percentageRaceFour" >
                <Form.Label>Percentage:</Form.Label>
                <Form.Control as='input' placeholder="percentage representation" name='percentageFourValue' value={this.state.percentageFourValue} onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>


            <Form.Group>
              <Form.Label>Other Information:</Form.Label>
              <Form.Control as="textarea" rows={5} type="text" name='otherValue' value={this.state.otherValue} onChange={this.handleChange} />
              <Form.Text className="text-muted">
              Key NPCS, events, what is that shifty blind man up to?
            </Form.Text>
            </Form.Group>
        </Form>



        <SubmitBtn onClick={this.handleSubmit} />
      </div>
    )
    
  }
}

export default CreateForm;