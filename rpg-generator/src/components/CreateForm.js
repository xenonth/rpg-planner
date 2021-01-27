import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

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
      descriptionValue: '',
      raceOneValue: '',
      raceTwoValue: '',
      raceThreeValue: '',
      raceFourValue: '',
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
      console.log(this.state.otherValue);
      //Code to check that the population field is a number or integer
        //if this.state.popvalue !== Number convert number or alert to reenter a value
    
  }

  //code for an API function to send a post request to the API in the object layout
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
                Please fill in hte above as an integer.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={5} name='descriptionValue' type="text" value={this.state.descriptionValue} onChange={this.handleChange}/>
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
            <Form.Text className="text-muted">
              Key NPCS, events, what is that shifty blind man up to?
            </Form.Text>
              <Form.Group as={Col} controlId="formRaceOne" >
              <Form.Label>percentage:</Form.Label>
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