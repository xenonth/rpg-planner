import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
function FormRow (props) {
        const raceonevalue = props.raceonevalue;
        const raceTwoValue = props.raceTwoValue;
        const raceThreeValue = props.raceThreeValue;
        const raceFourValue = props.raceFourValue; 

       return (
       <Form.Row>
        <Form.Group as={Col} controlId="formRaceOne" raceonevalue={raceonevalue}>
        <Form.Label>Race Name:</Form.Label>
        <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formRaceTwo" raceTwoValue={raceTwoValue}>
        <Form.Label>Race Name:</Form.Label>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" raceThreeValue={raceThreeValue}>
        <Form.Label>Race Name:</Form.Label>
        <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" raceFourValue={raceFourValue}>
        <Form.Label>Race Name:</Form.Label>
        <Form.Control />
        </Form.Group>
       </Form.Row>
    )
}

export default FormRow;