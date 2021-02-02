import React, { Component } from 'react';

import API from '../utils/API'

import CardDB from './CardDB';

class ListAllEntries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settlementOne: [],
            settlementTwo: [],
            settlementThree: [],
            settlementFour: [],
            settlementFive: [],
        }
    }  

    //convert first letter of string to uppercase
    firstLetterCapital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  //need to recode to loop through all the settlements and create a card for each one!
    AllEntries = () => {
        API.getSettlements().then(res => {
            console.log('its rendering' + JSON.stringify(res.data))
            this.setState({
                settlementOne: [res.data[0]],
                settlementTwo: [res.data[1]],
                settlementThree: [res.data[2]],
                settlementFour: [res.data[3]],
                settlementFive: [res.data[4]],
            })
        }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.AllEntries(); 
    }
    
    //rendering the five most recent objects in the database
    render() {

        return (
            <div>
                {this.state.settlementOne.map((town) => (
                    
                    <CardDB key={town.id}
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        race={town.population.majorityRace}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}

                {this.state.settlementTwo.map((town) => (
                    
                    <CardDB key={town.id}
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        race={town.population.majorityRace}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}

                {this.state.settlementThree.map((town) => (
                    
                    <CardDB key={town.id}
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        race={town.population.majorityRace}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}

                {this.state.settlementFour.map((town) => (
                    
                    <CardDB key={town.id}
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        race={town.population.majorityRace}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}

                {this.state.settlementFive.map((town) => (
                    
                    <CardDB key={town.id}
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        race={town.population.majorityRace}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}
            </div>
        )
    }
}
export default ListAllEntries;