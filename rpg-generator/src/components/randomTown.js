import React, { Component } from 'react';

import API from '../utils/API'

import RandomCard from './randomCard'

class RandomTown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      government: '',
      population: '',
      size: '',
      description: '',
      whatsUp: '',
      races: []
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
    API.randomSettlement().then(res => {
      console.log('its working' + JSON.stringify(res.data))
      this.setState ({
        name: res.data.name.toUpperCase(),
        government: this.firstLetterCapital(res.data.government),
        population: this.firstLetterCapital(res.data.population.type), 
        size: res.data.population.size,
        
        races:[
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
  //styles for materialUI

  render() {
    return (
      <div>
        <RandomCard 
          name = {this.state.name}
          government= {this.state.government}
          type = {this.state.population}
          size = {this.state.size}
          races ={this.state.races}
          description = {this.state.description}
          happening = {this.state.whatsUp}
          onClick={this.renderSettlement}
        />
      </div>
    );
  }

}


export default RandomTown;