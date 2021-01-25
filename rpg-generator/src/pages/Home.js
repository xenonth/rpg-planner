import React from "react";
//bootstrap layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListAllEntries from '../components/ListAllEntries';

//Render Most recent 10 posts from the database here.
const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs lg="2">
          WELCOME TO THE RPG PLANNER
        </Col>
        <Col md="auto">
            <ListAllEntries />
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
};

export default Home;