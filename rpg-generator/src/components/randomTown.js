import React, { Component } from 'react';

import API from '../utils/API'

import Card from 'react-bootstrap/Card'

import GenerateTown from './randomBtn';

class RandomTown extends Component {
  state = {
    settlement: '',
  };

  // When the component mounts, load the next settlement to be displayed
  componentDidMount() {
    this.renderSettlement();
  }

  //onClick of button call the API to render data to the page
  

  //loading the API call and equating it the settlement state object.
  renderSettlement = () => {
    this.setState({settlement: '',})
    API.randomSettlement().then(res => {
      console.log('its working' + res.data )
      this.setState ({settlement: JSON.stringify(res.data)})
    })
    .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div>
      <section>
        <GenerateTown onClick={this.renderSettlement}>Random Settlement</GenerateTown>
        </section>
        <section>
        <Card className="text-center">
          <Card.Header>Your Generated Town</Card.Header>
          <Card.Body>
            <Card.Title>{this.state.settlement}</Card.Title>
            <Card.Text>
              Government style is {this.state.settlement.government}
            </Card.Text>
            <Card.Text>
                {this.state.settlement.population}
            </Card.Text>
            <Card.Text>
                {this.state.settlement.description}{this.state.settlement.whatIsGoingOn}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Enjoy</Card.Footer>
        </Card>
      </section>
      </div>
    );
  }

}


export default RandomTown;