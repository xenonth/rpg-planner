import React from "react";
//bootstrap layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListAllEntries from '../components/ListAllEntries';

//Render Most recent 10 posts from the database here.
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-2">
          WELCOME TO THE RPG PLANNER
        </Col>
        <Col size="md-6 sm-12">
            <ListAllEntries />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;