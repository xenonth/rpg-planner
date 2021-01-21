import React from 'react';

//Bootstrap Dependencies
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/navbar'
import Form from 'react-bootstrap/form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function HeaderNav() {
  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">RPG-PLANNER</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/random">Generator</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default HeaderNav;