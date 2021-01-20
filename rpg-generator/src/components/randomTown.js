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

  //convert first letter of string to uppercase
  firstLetterCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  //onClick of button call the API to render data to the page

  //loading the API call and equating it the settlement state object.
  renderSettlement = () => {
    this.setState({settlement: []})
    API.randomSettlement().then(res => {
      console.log('its working' + JSON.stringify(res.data))
      this.setState ({
        name: this.firstLetterCapital(res.data.name),
        government: this.firstLetterCapital(res.data.government),
        population: [
          this.firstLetterCapital(res.data.population.type), 
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
      
        
        
        <Card className="text-center">
          <Card.Header placeholder="Town Name Here">{this.state.name}</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
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
          <Card.Footer className="text-muted">
            <GenerateTown onClick={this.renderSettlement}>GENERATE TOWN</GenerateTown>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}


export default RandomTown;