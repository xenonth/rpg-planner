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
      townValue: event.target.value,
      governValue: event.target.value,
    
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Your town name is: ${this.state.townValue}`
      `Your govern Style is: ${this.state.governValue}`
    
    );
  }

  render() {
    
    return (
      <div>
        <Form>
          
            <Form.Group>
              <Form.Label>Town Name</Form.Label>
              <Form.Control as='input' placeholder="Settlement Name" value={this.state.townValue} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Government</Form.Label>
              <Form.Control as='input' placeholder="How is Your Town Ruled" value={this.state.governValue} onChange={this.handleChange} />
            </Form.Group>
            
            <Form.Row>
              <Form.Group as={Col} controlId="formRaceOne" >
              <Form.Label>Race Name:</Form.Label>
              <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formRaceTwo" >
              <Form.Label>Race Name:</Form.Label>
              <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip" >
                <Form.Label>Race Name:</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip" >
                <Form.Label>Race Name:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
        </Form>



        <SubmitBtn onClick={this.handleSubmit} />
      </div>
    )
    
  }
}

export default CreateForm;