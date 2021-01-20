import React from 'react';

//bootstrap layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderNav from './components/navbar';

import RandomTown from './components/randomTown'

function App() {
  return (
    <div>
      <HeaderNav />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <RandomTown />
          </Col>
          <Col xs lg="2">

          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default App;
