import React from 'react';

//import bootstrap elements for input field
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormRow from './FormRow';



function InputFields(props) {
  //set props to it can be agiley updated when new keystroke data is updated.
  const onClick = props.onClick;
  const TownValue = props.townvalue;
  const governValue = props.governValue;
  const typeValue = props.typeValue;
  const descriptionValue = props.descriptionValue;
  const otherValue = props.otherValue;
 
  //data form to create and return a json object to the mongoDB on click.
  
  return (
    <div>
        <Form>
          <Form.Group>
            <Form.Label>Town Name</Form.Label>
            <Form.Control type="text" placeholder="Settlement Name" townvalue={TownValue}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Government</Form.Label>
            <Form.Control type="text" placeholder="How is Your Town Ruled" governValue={governValue}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="What size category is your settlement?" typeValue={typeValue} />
            <Form.Text className="text-muted">
            Is it a hamlet, farming-community, village, town, city, monastic order?.
          </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" rows={5} type="text" descriptionValue={descriptionValue}/>
            <Form.Text className="text-muted">
            What does your settlement look like?
            </Form.Text>
          </Form.Group>
          
          <FormRow 
          raceOneValue={props.raceOneValue}
          raceTwoValue={props.raceTwoValue}
          raceThreeValue={props.raceThreeValue}
          raceFourValue={props.raceFourValue}
          />

          <Form.Group>
            <Form.Label>Other Information:</Form.Label>
            <Form.Control as="textarea" rows={5} type="text" otherValue={otherValue}/>
            <Form.Text className="text-muted">
            Key NPCS, events, what is that shifty blind man up to?
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onClick}>
            Submit
          </Button>
        </Form>
      </div>
  );
}

export default InputFields;