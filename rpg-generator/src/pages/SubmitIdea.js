import React from "react";
//bootstrap layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CreateForm from '../components/CreateForm';

//Render Most recent 10 posts from the database here.
const SubmitIdea = () => {
  return (
    <Container>
      <Row>
        <Col xs lg="2">
          Add Your Own Idea to the system for others to explore and view!
        </Col>
        <Col md="auto">
            <CreateForm />
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
};

export default SubmitIdea;