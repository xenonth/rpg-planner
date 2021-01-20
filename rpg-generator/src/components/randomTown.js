import React, { Component } from 'react';

import API from '../utils/API'

import Card from 'react-bootstrap/Card'

import GenerateTown from './randomBtn';

class RandomTown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      government: '',
      population: [],
      description: '',
      whatsUp: '',

    }
  };

  // When the component mounts, load the next settlement to be displayed
  componentDidMount() {
    this.renderSettlement();
  }

  componentWillUnmount() {
    this.renderSettlement()
  }

  //onClick of button call the API to render data to the page

  //loading the API call and equating it the settlement state object.
  renderSettlement = () => {
    this.setState({settlement: []})
    API.randomSettlement().then(res => {
      console.log('its working' + JSON.stringify(res.data))
      this.setState ({
        name: res.data.name,
        government: res.data.government,
        population: [
          res.data.population.type, 
          res.data.population.size,
          res.data.population.raceOne,
          res.data.population.raceTwo,
          res.data.population.raceThree,
          res.data.population.raceFour,
        ],
        description: res.data.description,
        whatsUp: res.data.whatIsGoingOn,
  
      })
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
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>
              Government style is {this.state.government}
            </Card.Text>
            <Card.Text>
                {this.state.population[0]}
            </Card.Text>
            <Card.Text>
                {this.state.description}{this.state.whatsUp}
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